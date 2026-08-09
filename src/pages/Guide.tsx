import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import type { IconName } from "../components/nav-items";
import { usePageMeta } from "../lib/seo";

const SOURCE_TABS: { label: string; icon?: IconName; active: boolean }[] = [
  { label: "全部来源", active: true },
  { label: "官方", icon: "badge-check", active: false },
  { label: "个人经验", icon: "user-round", active: false },
];

const CATEGORY_TABS = [
  "全部分类",
  "到校报到",
  "校园生活",
  "学习教务",
  "奖助资助",
  "成长发展",
  "安全健康",
];

const GUIDES = [
  {
    slug: "guide-ms1qm6wm-f1912122",
    category: "校园生活",
    title: "测试测试",
    desc: "1282722727",
    minutes: "2 分钟",
    date: "2026/7/26",
    pinned: true,
    flags: ["置顶", "精华", "推荐"],
  },
  {
    slug: "guide-msitc52j-fd0764e0",
    category: "校园生活",
    title: "地大周边美食推荐",
    desc: "新生学校周边美食不踩雷",
    minutes: "2 分钟",
    date: "2026/8/7",
    pinned: false,
    flags: [],
  },
  {
    slug: "guide-ms1qtfxz-ae7bf85b",
    category: "校园生活",
    title: "图片测试",
    desc: "hsjshsshshhsjsjs",
    minutes: "2 分钟",
    date: "2026/7/26",
    pinned: false,
    flags: [],
  },
];

export default function Guide() {
  usePageMeta("新生指南", "中国地质大学（武汉）新生报到、校园生活、学习教务和安全健康指南。");

  return (
    <div className="page-shell">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="section-kicker">CAMPUS HANDBOOK</span>
            <h1>新生指南</h1>
            <p>官方信息与审核通过的学生经验分开展示，每篇内容都保留来源、更新时间和适用范围。</p>
          </div>
          <Link className="button button-primary" to="/guide/submit">
            提交个人指南
          </Link>
        </div>

        <div className="guide-tools refined-tools">
          <label className="search-box">
            <Icon name="search" size={19} strokeWidth={2} />
            <input
              placeholder="搜索事项、地点或来源"
              aria-label="搜索指南"
              defaultValue=""
            />
          </label>

          <div className="guide-filter-row">
            <div className="segmented-control" aria-label="指南来源">
              {SOURCE_TABS.map((t) => (
                <button
                  type="button"
                  className={t.active ? "active" : ""}
                  key={t.label}
                >
                  {t.icon ? <Icon name={t.icon} size={14} strokeWidth={2} /> : null}
                  {t.label}
                </button>
              ))}
            </div>

            <label className="filter-toggle">
              <input type="checkbox" value="on" />
              <span>
                <Icon name="sparkles" size={14} strokeWidth={2} />
                只看精华
              </span>
            </label>

            <label className="sort-select">
              <Icon name="sliders-horizontal" size={15} strokeWidth={2} />
              <select aria-label="指南排序" defaultValue="recommended">
                <option value="recommended">推荐优先</option>
                <option value="latest">最新发布</option>
                <option value="updated">最近更新</option>
              </select>
            </label>
          </div>

          <div className="category-tabs" role="tablist" aria-label="指南分类">
            {CATEGORY_TABS.map((cat, i) => (
              <button type="button" className={i === 0 ? "active" : ""} key={cat}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="guide-result-meta">
          <span>共 {GUIDES.length} 篇公开指南</span>
          <Link to="/guide/submit">
            提交个人指南 <Icon name="arrow-right" size={14} strokeWidth={2} />
          </Link>
        </div>

        <div className="guide-grid guide-grid-refined">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              className={`guide-card guide-card-art accent-green${g.pinned ? " pinned" : ""}`}
              to={`/guide/${g.slug}`}
            >
              <div className="guide-card-cover" aria-hidden>
                <span className="guide-card-cover-mark">校</span>
                <span className="guide-card-cover-glow" />
              </div>
              <div className="guide-card-top">
                <span className="guide-category accent-green">{g.category}</span>
                <span className="source-badge personal">
                  <Icon name="user-round" size={13} strokeWidth={2} />
                  个人
                </span>
              </div>
              <div className="guide-card-flags">
                {g.flags.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <div className="guide-card-footer">
                <span>
                  <Icon name="clock-3" size={14} strokeWidth={2} />
                  {g.minutes}
                </span>
                <span>
                  <Icon name="calendar-days" size={14} strokeWidth={2} />
                  {g.date}
                </span>
                <Icon name="arrow-right" size={17} strokeWidth={2} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
