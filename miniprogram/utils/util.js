// Date formatting utils
function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const m = d.getMonth() + 1
  const day = d.getDate()
  return `${m}月${day}日`
}

function getBeijingDateStr(offset = 0) {
  const now = new Date()
  const bj = new Date(now.getTime() + 8 * 60 * 60 * 1000)
  bj.setUTCDate(bj.getUTCDate() + offset)
  const y = bj.getUTCFullYear()
  const m = String(bj.getUTCMonth() + 1).padStart(2, '0')
  const d = String(bj.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function newsDateToBj(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const bj = new Date(d.getTime() + 8 * 60 * 60 * 1000)
  const y = bj.getUTCFullYear()
  const m = String(bj.getUTCMonth() + 1).padStart(2, '0')
  const day = String(bj.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

module.exports = {
  formatDate,
  getBeijingDateStr,
  newsDateToBj
}
