import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { CampusArt } from "../components/CampusArt";
import { usePageMeta } from "../lib/seo";

const QUICK_ENTRIES = [
  { icon: "graduation-cap", title: "新生入学", desc: "报到、缴费、宿舍与档案" },
  { icon: "map-pin", title: "校园地图", desc: "教学楼、食堂与生活设施" },
  { icon: "calendar-clock", title: "校历 & 选课", desc: "重要时间节点汇总" },
  { icon: "wallet", title: "奖助学金", desc: "申请流程与常见疑问" },
] as const;

const HIGHLIGHT_STATS = [
  { accent: "accent-green", icon: "badge-check", num: "0 篇", label: "官方核验指南" },
  { accent: "accent-coral", icon: "heart-handshake", num: "3 篇", label: "审核学生经验" },
  { accent: "accent-blue", icon: "book-open", num: "6 大场景", label: "覆盖校园生活" },
  { accent: "accent-gold", icon: "sparkles", num: "随问随答", label: "AI 知识库问答" },
] as const;

const CATEGORIES = [
  {
    href: "/guide?category=arrival",
    accent: "accent-coral",
    icon: "map-pinned",
    title: "到校与报到",
    desc: "从录取材料到抵达校区，把第一天拆成可完成的步骤。",
  },
  {
    href: "/guide?category=campus-life",
    accent: "accent-green",
    icon: "coffee",
    title: "校园与生活",
    desc: "校区、食宿、校园卡、网络和日常服务入口。",
  },
  {
    href: "/guide?category=study",
    accent: "accent-blue",
    icon: "book-open",
    title: "学习与教务",
    desc: "选课、校历、考试、学籍及常用表格下载。",
  },
  {
    href: "/guide?category=support",
    accent: "accent-gold",
    icon: "badge-dollar-sign",
    title: "奖助与资助",
    desc: "奖学金、助学金、绿色通道和困难认定入口。",
  },
  {
    href: "/guide?category=growth",
    accent: "accent-violet",
    icon: "sparkles",
    title: "成长与发展",
    desc: "社团、竞赛、志愿服务、就业与升学信息。",
  },
  {
    href: "/guide?category=wellbeing",
    accent: "accent-ink",
    icon: "shield-check",
    title: "安全与健康",
    desc: "校园安全、医疗、心理支持与紧急联络提示。",
  },
] as const;

const FEATURED_GUIDES = [
  { slug: "guide-ms1qm6wm-f1912122", num: "", title: "测试测试", desc: "1282722727" },
  { slug: "guide-msitc52j-fd0764e0", num: "01", title: "地大周边美食推荐", desc: "个人经验 · 2 分钟" },
  { slug: "guide-ms1qtfxz-ae7bf85b", num: "02", title: "图片测试", desc: "个人经验 · 2 分钟" },
] as const;

const QUESTION_CHIPS = [
  "报到要带哪些材料？",
  "教务系统从哪里进入？",
  "校园卡丢了怎么办？",
  "缓考申请表在哪里下载？",
];

export default function Home() {
  usePageMeta(undefined, "面向中国地质大学（武汉）学生的校园办事导航、审核内容与知识库问答。");

  return (
    <>
      {/* 首屏 Hero */}
      <section className="home-hero">
        <CampusArt variant="blue" char={null} className="absolute inset-0 h-full w-full" />
        <div className="container hero-content">
          <span className="eyebrow">校园生活，从这里开始</span>
          <h1>地大新生导航</h1>
          <p className="hero-intro">
            把第一次到校变成一张清楚的路线图。从报到、选课到日常办事，汇总值得收藏的校园入口与审核经验。
          </p>
          <form className="hero-search" action="/guide">
            <label>
              <Icon name="search" size={20} strokeWidth={1.6} />
              <input
                aria-label="搜索校园指南"
                placeholder="搜索报到、校园卡、选课、资助……"
                name="q"
                defaultValue=""
              />
            </label>
            <button className="button" type="submit">
              <Icon name="search" size={16} strokeWidth={1.8} />
              <span>查指南</span>
            </button>
          </form>
          <div className="hero-actions">
            <Link className="hero-quiet-link" to="/assistant">
              <Icon name="sparkles" size={14} strokeWidth={1.6} />
              直接问纪小萌
            </Link>
            <Link className="hero-quiet-link" to="/services">
              <Icon name="arrow-right" size={14} strokeWidth={1.6} />
              打开服务大厅
            </Link>
          </div>
          <div className="hero-proof">
            <span>
              <Icon name="badge-check" size={14} strokeWidth={1.6} />
              官方内容 0 篇
            </span>
            <span>
              <Icon name="file-check-corner" size={14} strokeWidth={1.6} />
              审核经验 3 篇
            </span>
            <span>
              <Icon name="compass" size={14} strokeWidth={1.6} />
              资料核验 · 2026-07-22
            </span>
          </div>
        </div>
      </section>

      {/* 快捷入口 + 数据 */}
      <section className="section-band white">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-kicker">Quick Entries</span>
              <h2 className="section-title">新生最先打开的四个入口</h2>
              <p className="section-desc">
                把最常被问到的四类事项先收在这里，节省第一次到校时的搜索时间。
              </p>
            </div>
            <Link className="text-link" to="/guide">
              查看全部指南 <Icon name="arrow-right" size={15} strokeWidth={1.6} />
            </Link>
          </div>

          <div className="quick-entry-grid">
            {QUICK_ENTRIES.map((item) => (
              <Link key={item.title} className="quick-entry-card" to="/guide">
                <span className="quick-entry-icon">
                  <Icon name={item.icon} size={22} strokeWidth={1.4} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Icon name="arrow-right" size={16} strokeWidth={1.6} />
              </Link>
            ))}
          </div>

          <div className="highlight-stats">
            {HIGHLIGHT_STATS.map((s) => (
              <div className="highlight-stat" key={s.label}>
                <span className={`highlight-stat-icon ${s.accent}`}>
                  <Icon name={s.icon} size={18} strokeWidth={1.6} />
                </span>
                <span className="highlight-stat-copy">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 按事情找答案 */}
      <section className="section-band">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-kicker">By Category</span>
              <h2 className="section-title">按事情找答案</h2>
              <p className="section-desc">六个清晰分类，覆盖新生最常遇到的办事与生活场景。</p>
            </div>
            <Link className="text-link" to="/guide">
              查看全部指南 <Icon name="arrow-right" size={15} strokeWidth={1.6} />
            </Link>
          </div>

          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <Link key={cat.title} className="category-card" to={cat.href}>
                <span className={`category-icon ${cat.accent}`}>
                  <Icon name={cat.icon} size={22} strokeWidth={2} />
                </span>
                <span>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </span>
                <Icon name="arrow-right" size={18} strokeWidth={1.6} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 本周精选 */}
      <section className="section-band white">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-kicker">This Week</span>
              <h2 className="section-title">新生正在看的事</h2>
              <p className="section-desc">每条内容都标注来源与核验日期，过期规则不继续沿用。</p>
            </div>
          </div>

          <div className="feature-layout">
            <Link className="featured-guide" to={`/guide/${FEATURED_GUIDES[0].slug}`}>
              <CampusArt variant="green" char="校" className="absolute inset-0 h-full w-full" />
              <div className="featured-guide-content">
                <span className="section-kicker">Featured · 2 分钟读完</span>
                <h3>{FEATURED_GUIDES[0].title}</h3>
                <p>{FEATURED_GUIDES[0].desc}</p>
                <span className="button button-coral">
                  打开清单 <Icon name="arrow-right" size={15} strokeWidth={1.8} />
                </span>
              </div>
            </Link>
            <div className="guide-stack">
              {FEATURED_GUIDES.slice(1).map((g) => (
                <Link key={g.slug} className="guide-row" to={`/guide/${g.slug}`}>
                  <span className="guide-number">{g.num}</span>
                  <span>
                    <h3>{g.title}</h3>
                    <p>{g.desc}</p>
                  </span>
                  <Icon name="arrow-right" size={17} strokeWidth={1.6} color="var(--muted)" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI 问答横幅 */}
      <section className="section-band dark">
        <div className="container assistant-strip">
          <div>
            <span className="section-kicker">RAG · 校园问答</span>
            <h2>
              不必翻完所有通知，
              <br />
              直接问纪小萌。
            </h2>
            <p>答案只基于已收录资料生成，并把原文来源一起交给你核对。</p>
            <div className="question-chips">
              {QUESTION_CHIPS.map((q) => (
                <span className="question-chip" key={q}>
                  {q}
                </span>
              ))}
            </div>
            <Link className="button button-coral" to="/assistant" style={{ marginTop: 28 }}>
              <Icon name="bot" size={16} strokeWidth={1.6} />
              开始提问
            </Link>
          </div>
          <div className="assistant-preview" aria-hidden>
            <div className="preview-top">
              <Icon name="bot" size={19} strokeWidth={1.6} color="var(--coral)" />
              纪小萌 · 校园问答
            </div>
            <div className="preview-question">缓考申请表在哪里下载？</div>
            <div className="preview-answer">可前往教务处“学生下载”专区获取当前版本，并先向学院确认审批流程。</div>
            <div className="preview-source">
              <Icon name="circle-check" size={13} strokeWidth={1.8} />
              来源：中国地质大学（武汉）教务处
            </div>
          </div>
        </div>
      </section>

      {/* 审核内容 */}
      <section className="section-band white">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-kicker">Curated Feed</span>
              <h2 className="section-title">把可靠内容留给下一位同学</h2>
              <p className="section-desc">公告、资源与学生经验分开展示，只有审核通过的内容才会进入公开页面。</p>
            </div>
            <Link className="text-link" to="/community">
              查看校园内容 <Icon name="arrow-right" size={15} strokeWidth={1.6} />
            </Link>
          </div>

          <div className="home-community-grid">
            <Link className="community-teaser" to="/community?topic=official">
              <div className="community-teaser-content">
                <span className="section-kicker">官方通知</span>
                <h3>先看已核验的校园信息</h3>
                <p>公告、办事提醒和资源推荐集中收录，查看来源和更新时间再行动。</p>
                <span className="text-link">
                  <Icon name="newspaper" size={14} strokeWidth={1.6} />
                  查看内容
                </span>
              </div>
              <CampusArt variant="blue" char="校" className="h-[220px] w-[200px]" />
            </Link>
            <Link className="community-teaser" to="/guide?source=PERSONAL">
              <div className="community-teaser-content">
                <span className="section-kicker">个人经验</span>
                <h3>从真实经历中找细节</h3>
                <p>学生经验明确标注参考属性，经过审核后帮助下一位同学少走弯路。</p>
                <span className="text-link">
                  <Icon name="arrow-right" size={14} strokeWidth={1.6} />
                  浏览经验
                </span>
              </div>
              <CampusArt variant="ink" char="校" className="h-[220px] w-[200px]" />
            </Link>
          </div>
        </div>
      </section>

      <div className="source-note">校园图片来源：中国地质大学（武汉）官网“校园风光” · 本站为学生服务项目，非学校官方网站</div>
    </>
  );
}
