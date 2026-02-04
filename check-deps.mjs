import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const configPath = path.join(rootDir, "sync-list.json");

const configRaw = await fs.readFile(configPath, "utf-8");
const config = JSON.parse(configRaw);

const sourceRoot = process.env.A_REPO_PATH
  ? path.resolve(rootDir, process.env.A_REPO_PATH)
  : path.resolve(rootDir, config.sourceRoot ?? "../fabrica-design-system");

const readPackage = async (dirPath) => {
  const pkgPath = path.join(dirPath, "package.json");
  const pkgRaw = await fs.readFile(pkgPath, "utf-8");
  return JSON.parse(pkgRaw);
};

const normalizeDeps = (deps = {}) =>
  Object.fromEntries(
    Object.entries(deps).map(([name, version]) => [name, String(version)])
  );

const diffDeps = (fromDeps, toDeps) =>
  Object.keys(fromDeps).filter((name) => !(name in toDeps));

const aPkg = await readPackage(sourceRoot);
const bPkg = await readPackage(rootDir);

const aDeps = normalizeDeps(aPkg.dependencies);
const bDeps = normalizeDeps(bPkg.dependencies);
const aDevDeps = normalizeDeps(aPkg.devDependencies);
const bDevDeps = normalizeDeps(bPkg.devDependencies);

const missingDeps = diffDeps(aDeps, bDeps);
const missingDevDeps = diffDeps(aDevDeps, bDevDeps);

const report = (label, items) => {
  if (items.length === 0) {
    console.log(`${label}: なし`);
    return;
  }
  console.log(`${label}:`);
  for (const name of items) {
    console.log(`- ${name}`);
  }
};

report("Bに不足している dependencies", missingDeps);
report("Bに不足している devDependencies", missingDevDeps);

if (missingDeps.length === 0 && missingDevDeps.length === 0) {
  console.log("差分なし");
}
