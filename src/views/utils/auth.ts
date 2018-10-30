import Cookies from 'js-cookie'

const TokenKey = 'systoken'

export const getToken = () => {
    return Cookies.get(TokenKey)
}

export const setToken = (token:any) => {
    return Cookies.set(TokenKey, token)
}
  
export const removeToken = ()=> {
    return Cookies.remove(TokenKey)
}
  