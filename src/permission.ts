import router from './router';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
//   if (store.getters.token) {
//     if (to.path === '/login') { // 自动登陆
//       next({ path: '/' })
//       NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//     } else {
//       if (store.getters.roles.length === 0) {
//         store.dispatch('GetInfo').then(res => { // 拉取用户信息
//           next()
//         }).catch((err) => {
//           store.dispatch('FedLogOut').then(() => {
//             Message.error(err || 'Verification failed, please login again')
            // next({ name: 'login' })
//           })
//         })
//       } else {
  next();
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
    //   next('/login')
    //   NProgress.done()
//     }
//   }
});

router.afterEach(() => {
    console.log(121);
    NProgress.done(); // 结束Progress
});
