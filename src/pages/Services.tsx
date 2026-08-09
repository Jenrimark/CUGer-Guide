import { Icon } from "../components/Icon";
import { usePageMeta } from "../lib/seo";

const SERVICES = [
  { name: "教务管理系统", desc: "课表、选课、成绩与校历", domain: "jwxt.lzufe.edu.cn", href: "https://jwxt.lzufe.edu.cn/", icon: "graduation-cap", accent: "accent-blue" },
  { name: "教务处", desc: "教学通知与学生下载", domain: "jwc.lzufe.edu.cn", href: "https://jwc.lzufe.edu.cn/", icon: "book-open-check", accent: "accent-coral" },
  { name: "数字图书馆", desc: "馆藏与电子资源", domain: "library.lzufe.edu.cn", href: "http://library.lzufe.edu.cn/", icon: "library", accent: "accent-green" },
  { name: "一卡通服务", desc: "校园卡相关业务入口", domain: "easytong.lzufe.edu.cn", href: "http://easytong.lzufe.edu.cn/", icon: "credit-card", accent: "accent-gold" },
  { name: "网络服务", desc: "校园网接入与说明", domain: "nic.lzufe.edu.cn", href: "http://nic.lzufe.edu.cn/index.htm", icon: "wifi", accent: "accent-violet" },
  { name: "学生工作", desc: "学生管理与资助信息", domain: "xgb.lzufe.edu.cn", href: "http://xgb.lzufe.edu.cn/", icon: "heart-handshake", accent: "accent-green" },
  { name: "地大就业网", desc: "招聘、双选与就业手续", domain: "zjc.lzufe.edu.cn", href: "http://zjc.lzufe.edu.cn/jyw/sy.htm", icon: "briefcase-business", accent: "accent-blue" },
  { name: "校团委", desc: "社团、活动与志愿服务", domain: "tw.lzufe.edu.cn", href: "http://tw.lzufe.edu.cn/", icon: "users-round", accent: "accent-coral" },
  { name: "本科招生", desc: "录取与新生官方信息", domain: "zjc.lzufe.edu.cn", href: "http://zjc.lzufe.edu.cn/zsw/index.htm", icon: "school", accent: "accent-gold" },
  { name: "校园地图", desc: "查看校区与校园位置", domain: "lzufe.edu.cn", href: "https://www.lzufe.edu.cn/fwzn/xydt.htm", icon: "map", accent: "accent-violet" },
  { name: "档案服务", desc: "学校档案业务入口", domain: "da.lzufe.edu.cn", href: "http://da.lzufe.edu.cn/", icon: "archive", accent: "accent-blue" },
  { name: "学校官网", desc: "通知公告与权威信息", domain: "lzufe.edu.cn", href: "https://www.lzufe.edu.cn/", icon: "landmark", accent: "accent-ink" },
] as const;

const SAFETY_NOTES = [
  {
    num: "01",
    title: "登录前先看地址",
    desc: "本站只整理入口，不会代收你的统一身份认证账号或校园卡密码。输入敏感信息前，请确认浏览器地址属于学校官方域名。",
  },
  {
    num: "02",
    title: "规则以最新通知为准",
    desc: "校历、选课时间、资助标准和办事地点都可能调整，请在正式提交前核对职能部门的当前通知。",
  },
  {
    num: "03",
    title: "资料失效请反馈",
    desc: "若某个入口无法打开、地址变更或信息有误，欢迎在校园内容中反馈，或通过 service@lzufe.cn 通知我们。",
  },
];

export default function Services() {
  usePageMeta("服务大厅", "中国地质大学（武汉）常用学生服务入口集合。");

  return (
    <div className="page-shell services-page">
      <div className="container">
        <div className="services-hero">
          <div className="services-hero-text">
            <span className="section-kicker">OFFICIAL SHORTCUTS</span>
            <h1>
              <span className="services-hero-title-cn">服务大厅</span>
              <span className="services-hero-title-en">Student Service Hub</span>
            </h1>
            <p>
              把散落在学校官网和职能部门的常用入口放在同一处。点击会跳转到对应官方系统，
              <strong>所有链接均在新窗口打开</strong>。
            </p>
            <div className="services-hero-stats">
              <div>
                <strong>12</strong>
                <span>常用入口</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>官方源链接</span>
              </div>
              <div>
                <strong>实时</strong>
                <span>地址核验</span>
              </div>
            </div>
          </div>

          <div className="services-hero-notice">
            <div className="services-hero-notice-head">
              <Icon name="shield-check" size={16} strokeWidth={1.6} />
              <span>安全提示</span>
            </div>
            <p>
              校内系统可能需要校园网或统一身份认证。请在登录前确认浏览器地址属于学校官方域名，避免在陌生页面输入密码。
            </p>
          </div>
        </div>

        <div className="service-grid">
          {SERVICES.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className={`service-card service-card-art ${s.accent}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className={`service-icon service-icon-art ${s.accent}`}>
                <Icon name={s.icon} size={22} strokeWidth={2} />
              </span>
              <div className="service-content">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="service-domain">{s.domain}</span>
              </div>
              <span className="service-arrow">
                <Icon name="arrow-up-right" size={16} strokeWidth={1.6} />
              </span>
            </a>
          ))}
        </div>

        <div className="service-safety">
          {SAFETY_NOTES.map((n) => (
            <div key={n.num} className="service-safety-number">
              {n.num}
            </div>
          ))}
          {SAFETY_NOTES.map((n) => (
            <div key={`${n.num}-content`}>
              <h2>{n.title}</h2>
              <p>{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
