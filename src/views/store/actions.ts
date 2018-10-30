import { sysUserLogin } from '@/views/interface/login';
import { getToken, setToken, removeToken } from '@/views/utils/auth';
import { ActionTree } from 'vuex';
import { Message } from 'element-ui';

const actions: ActionTree<any, any> = {
    /**
     * 登陆
     * @param param0
     * @param userInfo 登陆信息
     */
    async Login({state, commit} , userInfo: any) {
        return new Promise((resolve, reject) => {
            sysUserLogin(userInfo).then((response: any) => {
              setToken(response.data.systoken);
              console.log(response.data.systoken);
              commit('SET_TOKEN', response.data.systoken);
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
          });
      },
    /**
     * 获取接口传值参数
     * @param param0
     * @param params
     */
    // async paramsUrl({state, commit} , params:any) {
    //   let data:any = {};
    //   for(let variable  in params){   //variable 为属性名
    //     if (params[variable]!=''&&params[variable]!=null) {
    //       data[variable] = params[variable]
    //     }
    //   }
    //   return data
    // },
    async paramsUrl({state, commit} , params: any) {
      let data: string = '';
      let index: number = 0;
      for (const variable  in params) {   // variable 为属性名
        if (params[variable] != '' && params[variable] != null) {
          if (index == 0) {
            data += `?${variable}=${params[variable]}`;
          } else {
            data += `&${variable}=${params[variable]}`;
          }
          ++index;
        }
      }
      return data;
    },
    /**
     * 获取
     * @param param0
     * @param params
     */
    async getJumpUrl({state, commit} , params: any) {

      // return data
    },
    /**
     * 深拷贝
     * @param param0
     * @param params
     */
    async deep({state, commit} , params: any) {
      let obj = {};
      obj = JSON.parse(JSON.stringify(params));
      return obj;
    },

};

export default actions;

