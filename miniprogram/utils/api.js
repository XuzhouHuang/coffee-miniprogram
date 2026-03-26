const BASE_URL = 'https://coffee.kikihuang.net/api'

// Get MI token from cloud function or direct call
function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${path}`,
      method: options.method || 'GET',
      data: options.data,
      header: {
        'Content-Type': 'application/json',
        ...(options.header || {})
      },
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(new Error(`HTTP ${res.statusCode}`))
        }
      },
      fail: reject
    })
  })
}

function getNews(limit = 30) {
  return request(`/news?limit=${limit}`)
}

function getBeans() {
  return request('/beans')
}

function getBean(id) {
  return request(`/beans/${id}`)
}

function getBrewMethods() {
  return request('/brew-methods')
}

function getRoasters() {
  return request('/roasters')
}

function getRegions() {
  return request('/regions')
}

module.exports = {
  request,
  getNews,
  getBeans,
  getBean,
  getBrewMethods,
  getRoasters,
  getRegions,
  BASE_URL
}
