const api = require('../../utils/api')

Page({
  data: {
    article: null,
    loading: true
  },

  onLoad(options) {
    if (options.id) {
      this.loadArticle(options.id)
    }
  },

  async loadArticle(id) {
    this.setData({ loading: true })
    try {
      const res = await api.request(`/news/${id}`)
      this.setData({ article: res, loading: false })
      wx.setNavigationBarTitle({ title: res.titleZh || res.title || '文章详情' })
    } catch (err) {
      console.error('Load article failed:', err)
      this.setData({ loading: false })
    }
  },

  onOpenLink() {
    const url = this.data.article?.url
    if (url) {
      wx.setClipboardData({
        data: url,
        success: () => wx.showToast({ title: '原文链接已复制', icon: 'success' })
      })
    }
  }
})
