import Http from '@/views/aixo/http';

/**
 * 总系统角色菜单 | 根据用户ID获取所属角色的菜单
 * @param userId 用户id
 */
export const manageSysRoleMenuUserId = (userId: any) => {
    return Http({
        url: `/xxx/${userId}`,
        method: 'post',
    });
};
