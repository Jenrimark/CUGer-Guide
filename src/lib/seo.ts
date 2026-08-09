import { useEffect } from "react";

/**
 * 设置页面标题与描述(替代服务端 Metadata)。
 * 非首页标题统一追加站点名,与原站格式一致。
 */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    if (title) {
      document.title = title.includes("地大新生导航")
        ? title
        : `${title} | 地大新生导航`;
    }
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
