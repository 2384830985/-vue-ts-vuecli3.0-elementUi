
import { isvalidUsername } from '@/utils/validate.ts';
import Verification from '@/components/verification/verification.ts';
import { Component, Vue, Model } from 'vue-property-decorator';
import { State, Action, Getter ,Mutation } from "vuex-class";
/**
 * 定义当前数据
 */
interface Validate {
    loginAccount: string;
    password: string;
}

/**
 * 定义当前表单验证
 */
interface LoginRulesFun {
    loginAccount: {
        required: boolean,
        trigger: string,
        validator: (rule: any, value: string, callback: () => {}) => void,
    };
    password: {
        required: boolean,
        trigger: string,
        validator: (rule: any, value: string, callback: () => {}) => void,
    };
}
@Component({
    name: 'login',
})
export default class Login extends Vue {
    // 定加载
    private loading: boolean = false;
    // 定义input type
    private loginForm: Validate = {
        loginAccount: '',
        password: '',
    };
    @State imgUrl: string;
    //最先开始执行
    created() {
        console.log(this.imgUrl);
        console.log(Action);
        console.log(Getter);
        console.log(Mutation)
    }
    /**
     * 表单验证
     */
    private loginRules: LoginRulesFun = {
        loginAccount: {
            required: true,
            trigger: 'change',
            validator: (rule: any, value: string, callback: (res?: any) => {}) => {
                if (!isvalidUsername(value)) {
                    callback(new Error('请输入正确的用户名'));
                } else {
                    callback();
                }
            },
        },
        password: {
            required: true,
            trigger: 'change',
            validator: (rule: any, value: string, callback: (res?: any) => {}) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'));
                } else {
                    callback();
                }
            },
        },
    };
    /**
     * 登陆
     */
    private handleLogin() {
        if (this.Verification()) {
            this.loading = true;
            this.$message({
                showClose: true,
                message: '登陆成功',
                type: 'success',
            });
            this.$router.push({ path: '/system' });
            // this.$store.dispatch('Login', this.loginForm).then((res: any) => {
            //     if (res.code == 0) {
            //         this.$message({
            //             showClose: true,
            //             message: '登陆成功',
            //             type: 'success',
            //         });
            //         localStorage.setItem('userList', JSON.stringify(res.data));
            //         if (localStorage.getItem('NavigationIndex')) {
            //             localStorage.removeItem('NavigationIndex');
            //         }
            //         // that.$router.push({path:'/home/commodityList/empty/empty/empty/empty/0/empty/empty/empty/empty/1/20'});
            //         this.$router.push({ path: '/system' });
            //     } else {
            //         this.loading = false;
            //         this.$message(res.data);
            //     }
            //     console.log(res);
            // }).catch(() => {
            //     this.loading = false;
            // });
      }
    }
    /**
     * 表单验证
     */
    private Verification(): boolean {
      // 账号的验证
      if (!Verification.account(this.loginForm.loginAccount).status) {
          this.$message(Verification.account(this.loginForm.loginAccount).msg);
          return false;
      }
      // 密码的验证
      if (!Verification.password(this.loginForm.password).status) {
          this.$message(Verification.password(this.loginForm.password).msg);
          return false;
      }
      return true;
    }
}
