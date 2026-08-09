import { Link, Outlet, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Services from "./pages/Services";
import Community from "./pages/Community";
import Assistant from "./pages/Assistant";

/** 站点页共用布局:页头 + 页脚 + 底部导航 */
function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileNav />
    </>
  );
}

/** 问问纪小萌布局:无页脚,整页为对话工作区 */
function AssistantLayout() {
  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <MobileNav />
    </>
  );
}

/** 复刻范围外的路由兜底 */
function NotFound() {
  return (
    <div className="page-shell">
      <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>这个页面不在复刻范围内</h1>
        <p style={{ color: "var(--muted)", margin: "12px 0 24px" }}>
          当前仅复刻了首页、新生指南、服务大厅、校园内容与问问纪小萌。
        </p>
        <Link className="button button-primary" to="/">
          返回首页
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
      </Route>
      <Route element={<AssistantLayout />}>
        <Route path="/assistant" element={<Assistant />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
