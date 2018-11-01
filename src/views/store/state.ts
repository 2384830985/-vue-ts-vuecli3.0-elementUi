// 初始状态
import { getToken, setToken, removeToken } from '@/views/utils/auth'
const state: any = {
    token: getToken(),
    imgUrl: 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1/upload'
}
export default state