const api = require('../../utils/api')

Page({
  data: {
    bean: null,
    loading: true
  },

  onLoad(options) {
    if (options.id) {
      this.loadBean(options.id)
    }
  },

  async loadBean(id) {
    this.setData({ loading: true })
    try {
      const bean = await api.getBean(id)
      this.setData({ bean, loading: false })
    } catch (err) {
      console.error('Load bean failed:', err)
      this.setData({ loading: false })
      wx.showToast({ title: '加载失败', icon: 'none' })
    }
  }
})
