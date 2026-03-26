Page({
  data: {
    categories: [
      { name: '产区', icon: '🌍', type: 'regions' },
      { name: '烘焙商', icon: '🔥', type: 'roasters' },
      { name: '冲煮方法', icon: '☕', type: 'brew-methods' },
      { name: '品种', icon: '🌱', type: 'varieties' },
      { name: '处理法', icon: '🧪', type: 'processing' },
      { name: '面包制作', icon: '🍞', type: 'recipes' }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 })
    }
  },

  onCategoryClick(e) {
    const type = e.currentTarget.dataset.type
    wx.showToast({ title: '开发中...', icon: 'none' })
  }
})
