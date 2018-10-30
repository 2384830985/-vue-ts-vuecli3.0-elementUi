import { sysUserLogin } from '@/views/interface/login'
import { getToken, setToken, removeToken } from '@/views/utils/auth'
import { ActionTree } from 'vuex'
import {AxiosResponse} from 'axios'

const actions: ActionTree<any, any> = {
    async Login({state, commit} , userInfo:any) {
        const res = await sysUserLogin(userInfo)

        console.log(res)
        // return new Promise((resolve, reject) => {
        //   sysUserLogin(userInfo).then((response:any) => {
        //     setToken(response.data.systoken)
        //     console.log(response.data.systoken)
        //     commit('SET_TOKEN', response.data.systoken)
        //     console.log(123124234)
        //     resolve(response)
        //   }).catch(error => {
        //     reject(error)
        //   })
        // })
      },
}

export default actions;
// const user = {
//   state: {
//     token: getToken(),
//     name: '',
//     avatar: '',
//     roles: []
//   },

//   mutations: {
//     SET_TOKEN: (state:any, token:string) => {
//       state.token = token
//       console.log(3232)
//     },
//     // SET_NAME: (state, name) => {
//     //   state.name = name
//     // },
//     // SET_AVATAR: (state, avatar) => {
//     //   state.avatar = avatar
//     // },
//     // SET_ROLES: (state, roles) => {
//     //   state.roles = roles
//     // }
//   },

//   actions: {
//     // 登录
//     Login(commit:any , userInfo:any) {
//       return new Promise((resolve, reject) => {
//         sysUserLogin(userInfo).then((response:any) => {
//           setToken(response.data.systoken)
//           console.log(response.data.systoken)
//           commit('SET_TOKEN', response.data.systoken)
//           console.log(123124234)
//           resolve(response)
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 获取用户信息
//     // GetInfo({ commit:any, state }) {
//     //   return new Promise((resolve, reject) => {
//     //     getInfo(state.token).then(response => {
//     //       const data = response.data
//     //       if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
//     //         commit('SET_ROLES', data.roles)
//     //       } else {
//     //         reject('getInfo: roles must be a non-null array !')
//     //       }
//     //       commit('SET_NAME', data.name)
//     //       commit('SET_AVATAR', data.avatar)
//     //       resolve(response)
//     //     }).catch(error => {
//     //       reject(error)
//     //     })
//     //   })
//     // },

//     // 登出
//     // LogOut({ commit, state }) {
//     //   return new Promise((resolve, reject) => {
//     //     logout(state.token).then(() => {
//     //       commit('SET_TOKEN', '')
//     //       commit('SET_ROLES', [])
//     //       removeToken()
//     //       resolve()
//     //     }).catch(error => {
//     //       reject(error)
//     //     })
//     //   })
//     // },

//     // 前端 登出
//     // FedLogOut({ commit }) {
//     //   return new Promise(resolve => {
//     //     removeToken()
//     //     commit('SET_TOKEN', '')
//     //     resolve()
//     //   })
//     // }
//   }
// }

// export default user
