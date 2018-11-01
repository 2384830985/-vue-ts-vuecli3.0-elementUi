import Http from '@/views/aixo/http';

/**
 * 系统菜单列表
 * @param res 参数
 */
export const sysMenuPage = (res: any) => { // 系统菜单|系统菜单列表
    return Http({
        url: '/xxx/xxx/xxx',
        method: 'post',
        params: res,
    });
};
/**
 * 用户管理列表
 * @param res 参数
 */
export const sysUserPage = (res: any) => { // 用户菜单|用户管理列表
    return Http({
        url: '/xxx/xxx/xxx',
        method: 'post',
        params: res,
    });
};
/**
 * 系统角色列表
 * @param res 参数
 */
export const sysRolePage = (res: any) => { // 用户菜单|系统角色列表
    return Http({
        url: '/manage/sysRole/page',
        method: 'post',
        params: res,
    });
};
/**
 * 修改用户
 * @param res 参数
 */
export const sysUserAdd = (res: any) => {  // 用户菜单|创建用户
    return Http({
        url: '/manage/sysUser/add',
        method: 'post',
        params: res,
    });
};
/**
 * 获取当前用户
 * @param id 参数
 */
export const sysMenuEdit = (id: string) => {  // 用户菜单|获取当前用户
    return Http({
        url: `/manage/sysUser/edit/${id}`,
        method: 'post',
    });
};
/**
 * 修改用户
 * @param res 参数
 */
export const sysUserUpdate = (res: any) => {  // 用户菜单|修改用户
    return Http({
        url: '/manage/sysUser/update',
        method: 'post',
        params: res,
    });
};

/**
 * 根据id查询用户
 * @param res 参数
 */
export const sysUserEdit = (id: any) => { // 用户菜单|根据id查询用户
    return Http({
        url: `/manage/sysUser/edit/${id}`,
        method: 'get',
    });
};
/**
 * 修改系统菜单
 * @param res 参数
 */
export const sysMenuUpdate = (res: any) => { // 系统菜单|修改系统菜单
    return Http({
        url: `/manage/sysMenu/update`,
        method: 'post',
        params: res,
    });
};
/**
 * 创建系统菜单
 * @param res 参数
 */
export const sysMenuAdd = (res: any) => { // 系统菜单|创建系统菜单
    return Http({
        url: `/manage/sysMenu/add`,
        method: 'post',
        params: res,
    });
};

