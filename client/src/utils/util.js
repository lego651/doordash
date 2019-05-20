export const convertTime = (ms) => {
  let m = Math.floor((ms / 1000 / 60))
  return m > 1 ? m + ' minutes' : m + ' minute'
}

export const convertTime2 = (ms) => {
  let min = Math.floor((ms / 1000 / 60))
  let h = Math.floor(min / 60)
  let m = min % 60
  return h + ' hours:' + m + ' minutes'
}

export const updateUsername = (name) => {
  localStorage.setItem('username', name)
}
export const updateLoginTime = (time) => {
  localStorage.setItem('loginTime', time)
}
export const getUsername = () => {
  return localStorage.getItem('username')
}
export const getLoginTime = () => {
  return localStorage.getItem('loginTime')
}
