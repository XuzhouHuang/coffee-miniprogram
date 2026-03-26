Component({
  data: {
    selected: 0,
    list: [
      { pagePath: "/pages/index/index", icon: "news" },
      { pagePath: "/pages/beans/beans", icon: "bean" },
      { pagePath: "/pages/knowledge/knowledge", icon: "book" },
      { pagePath: "/pages/purchases/purchases", icon: "wallet" }
    ]
  },
  methods: {
    switchTab(e) {
      const url = e.currentTarget.dataset.path
      wx.switchTab({ url })
    }
  }
})
