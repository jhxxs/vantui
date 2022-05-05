export enum Pages {
  swipecell = "pages/taroify/swipecell/index",
  index = "pages/index/index",
  animation = "pages/animation/index"
}

export default {
  pages: [...Object.entries(Pages).map((v) => v[1])],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  usingComponents: {
    iconfont: "components/Iconfont/weapp/weapp"
  }
} as Taro.Config
