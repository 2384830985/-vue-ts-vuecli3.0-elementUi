/**
 * 表单的账号非空验证
 * @param item 账号验证
 */
function account(item: string): any {
    if (item === '' || item === null) {
        return { status: false, msg: '请填写账号' };
    }
    return { status: true };
}
/**
 * 表单密码的验证
 * @param item 密码的表单验证
 */
function password(item: string): any {
    const regular: any = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/;
    if (item === '' || item === null) {
        return { status: false, msg: '请填写密码' };
    }
    // if (item !== '' && !regular.test(item)) {
    //     return { status: false, msg: '密码格式错误' };
    // }
    if (item.length < 6) {
        return { status: false, msg: '密码不能小于5位' };
    }
    return { status: true };
}
export default {
    account,
    password,
};
