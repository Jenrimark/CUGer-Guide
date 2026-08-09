import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <div className="footer-brand-row">
            <span className="footer-brand-mark" aria-hidden>
              地
            </span>
            <span className="footer-brand">地大新生导航</span>
          </div>
          <p className="footer-copy">
            面向中国地质大学（武汉）学生的公益信息导航。本站不是学校官方网站，政策、日期和费用请以学校最新通知为准。
          </p>
          <div className="footer-meta">
            <span className="footer-meta-dot" aria-hidden />
            <span>由地大在校学生维护 · 非官方服务</span>
          </div>
        </div>

        <div>
          <div className="footer-title">快速前往</div>
          <div className="footer-links">
            <Link to="/guide">新生指南</Link>
            <Link to="/services">服务大厅</Link>
            <Link to="/community">校园内容</Link>
            <Link to="/assistant">知识库问答</Link>
            <Link to="/guide/submit">投稿个人经验</Link>
          </div>
        </div>

        <div>
          <div className="footer-title">信息说明</div>
          <div className="footer-links">
            <a href="https://www.lzufe.edu.cn/" target="_blank" rel="noreferrer">
              中国地质大学（武汉）官网 ↗
            </a>
            <span>资料核验：2026-07-22</span>
            <span>校园图片来源：学校官网“校园风光”</span>
            <span>本站内容仅供学习与办事参考</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 地大新生导航 · 让第一次到校，变得更清楚</span>
        <span>Built with care by LZUFERs</span>
      </div>
    </footer>
  );
}
