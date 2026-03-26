Page({
  data: {
    categories: [
      { name: '产区', icon: '🌍', url: '/pages/knowledge/knowledge?type=regions' },
      { name: '烘焙商', icon: '🔥', url: '/pages/knowledge/knowledge?type=roasters' },
      { name: '冲煮方法', icon: '☕', url: '/pages/knowledge/knowledge?type=brew-methods' }
    ]
  },

  onCategoryClick(e) {
    const type = e.currentTarget.dataset.type
    wx.showToast({ title: '开发中...', icon: 'none' })
  }
})
