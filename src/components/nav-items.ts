/** 主导航 / 移动端底部导航共用数据 */
export const NAV_ITEMS = [
  { href: "/", label: "首页", icon: "house" },
  { href: "/guide", label: "新生指南", icon: "compass" },
  { href: "/services", label: "服务大厅", icon: "user-round" },
  { href: "/community", label: "校园内容", icon: "newspaper" },
  { href: "/assistant", label: "问问纪小萌", icon: "bot" },
] as const;

export type IconName =
  | "house"
  | "compass"
  | "user-round"
  | "newspaper"
  | "bot"
  | "log-in"
  | "search"
  | "sparkles"
  | "arrow-right"
  | "badge-check"
  | "file-check-corner"
  | "graduation-cap"
  | "map-pin"
  | "calendar-clock"
  | "wallet"
  | "heart-handshake"
  | "book-open"
  | "map-pinned"
  | "coffee"
  | "badge-dollar-sign"
  | "shield-check"
  | "book-open-check"
  | "library"
  | "credit-card"
  | "wifi"
  | "briefcase-business"
  | "users-round"
  | "school"
  | "map"
  | "archive"
  | "landmark"
  | "clock-3"
  | "calendar-days"
  | "chevron-left"
  | "send"
  | "plus"
  | "x"
  | "menu"
  | "sliders-horizontal"
  | "database"
  | "megaphone"
  | "arrow-up-right"
  | "circle-check"
  | "gift";
