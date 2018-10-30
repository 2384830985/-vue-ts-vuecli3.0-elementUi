import method from '@/views/method/method';
const vfilters: any = {
    tmsStatus: (items: any) => {// 物流信息
        let title;
        method.tmsStatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    isCpsProfit: (items: any) => {// 订单类型
        let title;
        method.isCpsProfit.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    profitType: (items: any) => {// 收益；类型类型
        let title;
        method.profitType.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    refundType: (items: any) => {// 售后方式
        let title;
        method.refundType.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    payStatus: (items: any) => {// 付款状态
        let title;
        method.payStatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    refundStatus: (items: any) => {// 退款状态
        let title;
        method.refundStatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    userisDels: (items: any) => {// 用户状态
        let title;
        method.userIsDel.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },

    userIsSeal: (items: any) => {// 用户状态
        let title;
        method.userIsSeal.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    capitalChannel: (items: any) => {// 支付方式
        let title;
        method.capitalChannel.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    tradeStatus: (items: any) => {// 主订单状态
        let title;
        method.orderTradeStatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    orderStatus: (items: any) => {// 子订单状态
        let title;
        method.orderStatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    changCtiy: (items: any) => {// 转化城市
        switch (Number(items)) {
            case 0:
                return '全国';
                break;
        }
    },
    changAdvertisement: (items: any) => {// 广告状态
        let title;
        method.changAdvertisement.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    formatSiteId: (items: any) => {// 站点
        let title;
        method.formatSiteId.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    changPlatform: (items: any) => {// 平台状态
        let title;
        method.changPlatform.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;
            }
        });
        return title;
    },
    commodlitystatus: (items: any) => {// 商品管理状态
        let title;
        method.commodlitystatus.forEach(function(res: any) {
            if (res.val == Number(items)) {
                title = res.title;

            }
        });
        return title;
    },
    formatDate(time: string) {// 时间戳转化日期
        if (!time) { return ''; }
        const date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
    },
    parseFloat(items: any) {
         let item:any = parseFloat(items);
         if (isNaN(item)) {
                return false;
            }
         const f:any = Math.round(items * 100) / 100;
         let s = f.toString();
         let rs = s.indexOf('.');
         if (rs < 0) {
                rs = s.length;
                s += '.';
            }
         while (s.length <= rs + 2) {
                s += '0';
            }
         return s;
    },
    mathCeil(items: any) {
        if (!items) { return '0%'; }
        return Math.ceil(items * 10000) / 100 + '%';
    },
    /**
     * 站点的过滤器
     * @param item
     * @param res
     * @returns {*}
     */
    site(item: any, res: any) {
        if (!item) { return ''; }
        if (!res) { return ''; }
        for (const items of res) {
            if (items.id == item) {
                return items.siteName;
            }
        }
    },
};

function formatDate(date: any, fmt: string) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    const o: any = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            const str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero(str: string) {
    return ('00' + str).substr(str.length);
}


export default vfilters;
