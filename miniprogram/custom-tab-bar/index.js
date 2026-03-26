Component({
  data: {
    selected: 0,
    list: [
      { pagePath: "/pages/index/index", text: "日报", icon: "📰" },
      { pagePath: "/pages/beans/beans", text: "咖啡豆", icon: "☕" },
      { pagePath: "/pages/knowledge/knowledge", text: "知识库", icon: "📖" }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
    }
  }
})
