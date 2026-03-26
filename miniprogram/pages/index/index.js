const api = require('../../utils/api')
const util = require('../../utils/util')

Page({
  data: {
    todayNews: [],
    yesterdayNews: [],
    today: '',
    yesterday: '',
    loading: true
  },

  onLoad() {
    this.loadNews()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  onPullDownRefresh() {
    this.loadNews().then(() => wx.stopPullDownRefresh())
  },

  async loadNews() {
    this.setData({ loading: true })
    try {
      const res = await api.getNews(30)
      const items = Array.isArray(res) ? res : (res.data || res)
      
      const today = util.getBeijingDateStr(0)
      const yesterday = util.getBeijingDateStr(-1)

      const todayNews = items.filter(n => util.newsDateToBj(n.newsDate) === today)
      const yesterdayNews = items.filter(n => util.newsDateToBj(n.newsDate) === yesterday)

      this.setData({
        todayNews,
        yesterdayNews,
        today,
        yesterday,
        loading: false
      })
    } catch (err) {
      console.error('Load news failed:', err)
      this.setData({ loading: false })
      wx.showToast({ title: '加载失败', icon: 'none' })
    }
  },

  onNewsClick(e) {
    const item = e.currentTarget.dataset.item
    if (item.content) {
      wx.navigateTo({
        url: `/pages/news-detail/news-detail?id=${item.id}`
      })
    } else if (item.url) {
      wx.setClipboardData({
        data: item.url,
        success: () => wx.showToast({ title: '链接已复制', icon: 'success' })
      })
    }
  },

  getSourceClass(source) {
    const map = {
      'Daily Coffee News': 'source-daily-coffee-news',
      'Perfect Daily Grind': 'source-perfect-daily-grind',
      'Sprudge': 'source-sprudge',
      'Coffee Review': 'source-coffee-review',
      'Fresh Cup': 'source-fresh-cup',
      'Barista Hustle': 'source-barista-hustle'
    }
    return map[source] || 'badge-outline'
  }
})
