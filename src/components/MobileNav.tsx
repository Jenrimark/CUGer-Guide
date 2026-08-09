import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { NAV_ITEMS } from "./nav-items";

/**
 * 移动端底部导航(≤680px 显示)。
 * 原站抓包时该导航未水合,内部结构按设计还原:
 * 5 个等宽入口,激活项上方有珊瑚色圆点。
 */
export default function MobileNav() {
  const { pathname } = useLocation();

  return (
    <nav className="mobile-nav" aria-label="手机导航">
      {NAV_ITEMS.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            to={item.href}
            className={
              "relative flex h-full flex-col items-center justify-center gap-1 text-[11px] font-medium text-(--ink-2) transition-colors" +
              (active ? " active" : "")
            }
          >
            <Icon name={item.icon} size={20} strokeWidth={1.7} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
