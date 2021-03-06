export default {
  duration: duration,
  truncateOnWord: truncateOnWord
}

export function duration (value) {
  return Math.floor(value / 60) + ':' + (value % 60 ? value % 60 : '00')
}

export function truncateOnWord (str, limit) {
  var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF'
  var reg = new RegExp('(?=[' + trimmable + '])')
  var words = str.split(reg)
  var count = 0
  var returnWords = words.filter(function (word) {
    count += word.length
    return count <= limit
  }).join('')
  if (str.length > limit) {
    returnWords = returnWords + ' ...'
  }
  return returnWords
}

export function stripHTML (value) {
  let div = document.createElement('div')
  div.innerHTML = value
  const text = div.textContent || div.innerText || ''
  return text
}
