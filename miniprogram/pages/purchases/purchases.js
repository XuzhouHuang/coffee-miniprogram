const api = require('../../utils/api')

Page({
  data: {
    tab: 'beans',
    beanPurchases: [],
    cafePurchases: [],
    equipmentPurchases: [],
    breadPurchases: [],
    loading: true
  },

  onLoad() {
    this.loadPurchases()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 3 })
    }
  },

  onPullDownRefresh() {
    this.loadPurchases().then(() => wx.stopPullDownRefresh())
  },

  async loadPurchases() {
    this.setData({ loading: true })
    try {
      const res = await api.request('/purchases')
      const data = res || {}
      this.setData({
        beanPurchases: data.beanPurchases?.data || data.beanPurchases || [],
        cafePurchases: data.cafePurchases?.data || data.cafePurchases || [],
        equipmentPurchases: data.equipmentPurchases?.data || data.equipmentPurchases || [],
        breadPurchases: data.breadPurchases?.data || data.breadPurchases || [],
        loading: false
      })
    } catch (err) {
      console.error('Load purchases failed:', err)
      this.setData({ loading: false })
    }
  },

  switchTab(e) {
    this.setData({ tab: e.currentTarget.dataset.tab })
  },

  onBeanClick(e) {
    const beanId = e.currentTarget.dataset.beanId
    if (beanId) {
      wx.navigateTo({ url: `/pages/bean-detail/bean-detail?id=${beanId}` })
    }
  }
})
