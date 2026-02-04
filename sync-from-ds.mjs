import { promises as fs } from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fg from "fast-glob";

const rootDir = process.cwd();
const configPath = path.join(rootDir, "sync-list.json");

const configRaw = await fs.readFile(configPath, "utf-8");
const config = JSON.parse(configRaw);

const sourceRoot = process.env.A_REPO_PATH
  ? path.resolve(rootDir, process.env.A_REPO_PATH)
  : path.resolve(rootDir, config.sourceRoot ?? "../fabrica-design-system");

const targets = Array.isArray(config.targets) ? config.targets : [];
const args = process.argv.slice(2);
const dryRun = args.includes("--dry");
const forceYes = args.includes("--yes");
const singleFileArgIndex = args.findIndex((value) => value === "--file");
const singleFile = singleFileArgIndex !== -1 ? args[singleFileArgIndex + 1] : null;

const IGNORED_FILES = ["**/.DS_Store"];

const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true });
};

const copyFile = async (fromPath, toPath) => {
  await ensureDir(path.dirname(toPath));
  if (dryRun) {
    console.log(`[dry] copy ${fromPath} -> ${toPath}`);
    return;
  }
  await fs.copyFile(fromPath, toPath);
  console.log(`copied ${fromPath} -> ${toPath}`);
};

const hasGlob = (value) => /[*?[{\]]/.test(value);

const stripGlobBase = (pattern) => {
  const parts = pattern.split(/[\\/]/);
  const globIndex = parts.findIndex((part) => hasGlob(part));
  const baseParts = globIndex === -1 ? parts : parts.slice(0, globIndex);
  return baseParts.join("/");
};

const resolveFrom = (relativePath) => path.resolve(sourceRoot, relativePath);
const resolveTo = (relativePath) => path.resolve(rootDir, relativePath);

const confirm = async (message) => {
  if (forceYes) return true;
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(`${message} (y/N): `);
  rl.close();
  return answer.trim().toLowerCase() === "y";
};

const copyEntries = [];

if (singleFile) {
  const normalized = singleFile.replace(/^\.?\//, "");
  const fromPath = resolveFrom(normalized);
  const toPath = resolveTo(normalized);
  const ok = await confirm(
    `単体同期: ${fromPath} -> ${toPath} を上書きしますか`
  );
  if (!ok) process.exit(1);
  await copyFile(fromPath, toPath);
  console.log(dryRun ? "single dry run done" : "single sync done");
  process.exit(0);
}

for (const target of targets) {
  const from = target.from;
  const to = target.to;
  if (!from || !to) continue;

  if (hasGlob(from)) {
    const base = stripGlobBase(from);
    const matches = await fg(from, {
      cwd: sourceRoot,
      dot: true,
      onlyFiles: true,
      ignore: IGNORED_FILES,
    });
    for (const match of matches) {
      const relative = base ? path.relative(base, match) : match;
      const fromPath = resolveFrom(match);
      const toPath = resolveTo(path.join(to, relative));
      copyEntries.push({ fromPath, toPath });
    }

  } else {
    const fromPath = resolveFrom(from);
    const toPath = resolveTo(to);
    copyEntries.push({ fromPath, toPath });
  }
}

const overwriteCount = copyEntries.length;
if (overwriteCount > 0) {
  const ok = await confirm(
    `一括同期: ${overwriteCount}件を上書きしますか`
  );
  if (!ok) process.exit(1);
}

for (const entry of copyEntries) {
  await copyFile(entry.fromPath, entry.toPath);
}

console.log(dryRun ? "dry run done" : "sync done");
