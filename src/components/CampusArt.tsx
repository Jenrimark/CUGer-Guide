import type { ComponentPropsWithoutRef } from "react";

/**
 * 校园照片占位图。
 * 原站照片无法从抓包中获得(已被抓取工具内联为 base64),
 * 这里用设计色板生成渐变占位,后续可替换为真实图片或远程 URL。
 */
const GRADIENTS = {
  green: "radial-gradient(120% 90% at 15% 10%, #7d9a8f 0%, #6b8a7f 38%, #3f5a51 100%)",
  coral: "radial-gradient(120% 90% at 15% 10%, #c08c7b 0%, #b07a6a 38%, #8a5b4d 100%)",
  blue: "radial-gradient(120% 90% at 15% 10%, #8ba3b3 0%, #7a90a0 38%, #556c7b 100%)",
  ink: "radial-gradient(120% 90% at 15% 10%, #4a4a46 0%, #3a3a37 38%, #1f1f1d 100%)",
  gold: "radial-gradient(120% 90% at 15% 10%, #c8b184 0%, #b8a06b 38%, #8a7a52 100%)",
} as const;

export function CampusArt({
  variant = "green",
  char = "校",
  className = "",
  ...rest
}: {
  variant?: keyof typeof GRADIENTS;
  char?: string | null;
  className?: string;
} & ComponentPropsWithoutRef<"div">) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        background: GRADIENTS[variant],
        ...rest.style,
      }}
      {...rest}
    >
      {char ? (
        <span className="flex h-full w-full items-center justify-center font-serif text-5xl font-semibold text-white/25">
          {char}
        </span>
      ) : null}
    </div>
  );
}
