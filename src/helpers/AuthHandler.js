import Cookies from 'js-cookie'

export const isLogged = () => {
  let token = Cookies.get('token')
  if (token === true) {
    return true
  } else {
    return false
  }
}
