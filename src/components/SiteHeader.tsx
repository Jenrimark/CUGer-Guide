import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { NAV_ITEMS } from "./nav-items";

/**
 * 顶部导航。首页(未登录)显示「登录 / 注册」,
 * 其余页面显示用户信息徽章。
 */
export default function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" aria-label="地大新生导航首页" to="/">
          <span className="brand-mark" aria-hidden>
            地
          </span>
          <span className="brand-copy">
            <strong>地大新生导航</strong>
            <span>学生共建 · 非官方服务</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="主导航">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                className={active ? "nav-link active" : "nav-link"}
                to={item.href}
              >
                <Icon name={item.icon} size={15} strokeWidth={1.6} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          {isHome ? (
            <Link className="button button-primary" to="/auth">
              <Icon name="log-in" size={15} strokeWidth={1.6} />
              登录 / 注册
            </Link>
          ) : (
            <Link className="user-chip" aria-label="个人中心" to="/profile">
              <span>test</span>
              <span className="avatar">t</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
