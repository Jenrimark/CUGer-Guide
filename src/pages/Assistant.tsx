import { Icon } from "../components/Icon";
import { usePageMeta } from "../lib/seo";

const STARTERS = [
  "报到要带哪些材料？",
  "教务系统从哪里进入？",
  "校园卡丢了怎么办？",
  "缓考申请表在哪里下载？",
];

export default function Assistant() {
  usePageMeta("问问纪小萌", "基于校园资料的知识库问答。");

  return (
    <div className="assistant-page">
      <div className="container">
        <div className="assistant-workspace">
          {/* 左侧对话列表 */}
          <aside className="conversation-rail">
            <div className="conversation-rail-head">
              <div className="assistant-identity">
                <span>
                  <Icon name="sparkles" size={18} strokeWidth={2} />
                </span>
                <div>
                  <strong>纪小萌</strong>
                  <small>校园知识助手</small>
                </div>
              </div>
              <button
                className="icon-button assistant-mobile-close"
                type="button"
                aria-label="关闭对话列表"
              >
                <Icon name="x" size={18} strokeWidth={2} />
              </button>
            </div>

            <button className="new-conversation" type="button">
              <Icon name="plus" size={17} strokeWidth={2} />
              新建对话
            </button>

            <div className="conversation-label">
              <span>最近对话</span>
              <span>0</span>
            </div>
            <div className="conversation-list">
              <div className="rail-empty">还没有对话记录</div>
            </div>

            <div className="assistant-meta">
              <div>
                <Icon name="database" size={15} strokeWidth={2} />
                <span>25 份资料</span>
                <span>213 个片段</span>
              </div>
              <div className="quota-line">
                <span>今日额度</span>
                <strong>10 / 10</strong>
              </div>
              <div className="quota-track">
                <i style={{ width: "0%" }} />
              </div>
            </div>
          </aside>

          {/* 右侧对话面板 */}
          <section className="conversation-panel">
            <header className="conversation-header">
              <button
                className="icon-button assistant-mobile-menu"
                type="button"
                aria-label="打开对话列表"
              >
                <Icon name="menu" size={19} strokeWidth={2} />
              </button>
              <div>
                <h1>新的校园问题</h1>
                <p>
                  <i />
                  知识库智能问答已连接
                </p>
              </div>
              <span className="conversation-user">
                <span>t</span>
                test
              </span>
            </header>

            <div className="conversation-messages" aria-live="polite">
              <div className="assistant-empty">
                <span className="assistant-empty-mark">
                  <Icon name="bot" size={28} strokeWidth={1.4} />
                  <span className="assistant-empty-mark-pulse" aria-hidden />
                </span>
                <span className="assistant-empty-kicker">AI ASSISTANT · 纪小萌</span>
                <h2>今天想了解什么？</h2>
                <p>
                  报到、选课、校园服务与资助信息，都可以从一个问题开始。
                  <br />
                  回答只基于已收录资料生成，并附上原文来源。
                </p>
                <div className="assistant-empty-section">
                  <span className="assistant-empty-section-label">热门问题</span>
                  <div className="starter-grid">
                    {STARTERS.map((s) => (
                      <button type="button" key={s}>
                        <span>{s}</span>
                        <Icon name="chevron-left" size={15} strokeWidth={2} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div aria-hidden />
            </div>

            <div className="conversation-compose-wrap">
              <form className="conversation-composer">
                <textarea
                  maxLength={500}
                  rows={2}
                  placeholder="输入你的校园问题"
                />
                <button type="submit" disabled aria-label="发送问题">
                  <Icon name="send" size={19} strokeWidth={2} />
                </button>
              </form>
              <span className="assistant-disclaimer">回答由知识库生成，重要信息请核对来源</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
