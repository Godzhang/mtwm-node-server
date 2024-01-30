import { getAssetPathByPrefix } from "../utils/utils.js";

const requireMenuPath = getAssetPathByPrefix("/nav-menu-icon/");

export const mainMenu = [
  {
    // iconUrl: "/src/assets/nav-menu-icon/meishi.png",
    iconUrl: requireMenuPath("meishi.png"),
    label: "美食",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requireMenuPath("tiandian.png"),
    label: "甜点饮品",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requireMenuPath("chaoshi.png"),
    label: "超市便利",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requireMenuPath("guoshu.png"),
    label: "蔬菜水果",
    router: "",
    isMain: true,
  },
  {
    iconUrl: requireMenuPath("maiyao.png"),
    label: "看病买药",
    router: "",
    isMain: true,
  },
];

export const subMenu = [
  {
    iconUrl: requireMenuPath("2-1.png"),
    label: "夜宵",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-4.png"),
    label: "拼好饭",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-3.png"),
    label: "跑腿",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-5.png"),
    label: "津贴联盟",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-4.png"),
    label: "浪漫鲜花",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-1.png"),
    label: "汉堡披萨",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-1.png"),
    label: "品质百货",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-2.png"),
    label: "龙虾烧烤",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-3.png"),
    label: "鸭脖卤味",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-3.png"),
    label: "饺子馆",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-5.png"),
    label: "新店特惠",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-3.png"),
    label: "凉皮肉夹馍",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-4.png"),
    label: "煲仔饭",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-2.png"),
    label: "麻辣烫冒菜",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-3.png"),
    label: "小吃馆",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-2.png"),
    label: "黄焖鸡米饭",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-4.png"),
    label: "日韩料理",
    router: "",
  },
  {
    iconUrl: requireMenuPath("2-3.png"),
    label: "必点榜",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-2.png"),
    label: "家常菜",
    router: "",
  },
  {
    iconUrl: requireMenuPath("3-2.png"),
    label: "快食简餐",
    router: "",
  },
  // {
  //   iconUrl: requireMenuPath(".png"),
  //   label: "全部",
  //   router: "/pages/allcategory/index",
  // },
];
