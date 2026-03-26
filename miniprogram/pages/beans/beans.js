const api = require('../../utils/api')

Page({
  data: {
    beans: [],
    loading: true
  },

  onLoad() {
    this.loadBeans()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },

  onPullDownRefresh() {
    this.loadBeans().then(() => wx.stopPullDownRefresh())
  },

  async loadBeans() {
    this.setData({ loading: true })
    try {
      const res = await api.getBeans()
      const beans = res.data || res
      this.setData({ beans, loading: false })
    } catch (err) {
      console.error('Load beans failed:', err)
      this.setData({ loading: false })
    }
  },

  onBeanClick(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/bean-detail/bean-detail?id=${id}` })
  }
})
