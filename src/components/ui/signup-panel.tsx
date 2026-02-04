import { Button } from "./button";

type SignupPanelProps = {
  title?: string;
  className?: string;
};

export function SignupPanel({
  title = "新規登録",
  className,
}: SignupPanelProps) {
  const classes = [
    "w-[360px] rounded-xl border border-neutral-200 p-4",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="flex flex-col gap-3">
        <input
          className="h-10 rounded-md border border-neutral-300 px-3 text-sm"
          placeholder="メールアドレス"
          type="email"
        />
        <input
          className="h-10 rounded-md border border-neutral-300 px-3 text-sm"
          placeholder="パスワード"
          type="password"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Button className="w-full">続行</Button>
        <Button className="w-full" variant="accent">
          Googleで続行
        </Button>
      </div>
    </div>
  );
}
