import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { usePageMeta } from "../lib/seo";

const TOPICS = ["全部", "校园公告", "官方通知", "经验精选", "资源推荐"];

export default function Community() {
  usePageMeta("校园内容", "中国地质大学（武汉）校园公告、审核经验与资源推荐。");

  return (
    <div className="page-shell community-page">
      <div className="container">
        <div className="page-heading community-heading">
          <div>
            <span className="section-kicker">CAMPUS BULLETIN</span>
            <h1>校园内容</h1>
            <p>集中查看官方公告、审核经验和校园资源，所有内容均经过管理员确认后公开。</p>
          </div>
        </div>

        <div className="curated-layout">
          <aside className="curated-sidebar">
            <div className="topic-panel">
              <div className="topic-title">内容分类</div>
              {TOPICS.map((t, i) => (
                <button type="button" className={i === 0 ? "active" : ""} key={t}>
                  <span>{t}</span>
                </button>
              ))}
            </div>
            <div className="community-rule">
              <Icon name="shield-check" size={18} strokeWidth={2} />
              <strong>审核后公开</strong>
              <p>此处只展示管理员发布或审核确认的内容，不开放即时发帖、评论和点赞。</p>
            </div>
          </aside>

          <div className="community-main curated-main">
            <div className="curated-intro">
              <div>
                <span>
                  <Icon name="badge-check" size={16} strokeWidth={2} />
                  内容可信度说明
                </span>
                <h2>公告、精选经验与校园资源</h2>
                <p>官方内容与学生经验分开标识；个人经验仅作为参考，具体事项仍以学校最新通知为准。</p>
              </div>
              <Link className="button button-primary" to="/guide/submit">
                <Icon name="book-open-check" size={17} strokeWidth={2} />
                提交经验指南
              </Link>
            </div>

            <div className="feed-heading">
              <strong>最新内容</strong>
              <span>管理员审核发布</span>
            </div>

            <div className="curated-post-list">
              <article className="curated-post">
                <header>
                  <span className="curated-icon">
                    <Icon name="megaphone" size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <div>
                      <span className="official-badge">
                        <Icon name="badge-check" size={12} strokeWidth={2} />
                        管理员发布
                      </span>
                    </div>
                    <small>官方通知 · 1天前</small>
                  </div>
                </header>
                <h2>弄着玩的demo网站，想了解学校可以自己去问学长学姐</h2>
                <p className="curated-content">问小财很蠢的，少玩，要花俺的money</p>
                <footer>
                  <span>系统管理员</span>
                  <span>内容已审核</span>
                </footer>
              </article>
            </div>
          </div>

          <aside className="community-aside">
            <div className="aside-community-card">
              <span className="section-kicker">投稿通道</span>
              <h3>把个人经验整理成可复用的指南</h3>
              <p>投稿不会直接公开。管理员会核验内容、来源和隐私风险，再决定通过或要求修改。</p>
              <Link className="text-link" to="/guide/submit">
                开始整理
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
