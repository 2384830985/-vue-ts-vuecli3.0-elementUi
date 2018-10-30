/**
 * 主交易单状态
 * 0未确认，1已确认，2待发货，3已发货，4申请取消，
 * 7申请售后，50用户拒签，51已取消，54交易关闭，55已完成',
 * @type {*[]}
 */
const orderTradeStatus: object[] = [
    {val: '0', title: '未确认'},
    {val: '1', title: '已确认'},
    {val: '2', title: '待发货'},
    {val: '3', title: '已发货'},
    {val: '4', title: '申请取消'},
    {val: '7', title: '申请售后'},
    {val: '50', title: '用户拒签'},
    {val: '51', title: '已取消'},
    {val: '54', title: '交易关闭'},
    {val: '55', title: '已完成'},
];
/**
 * 商品管理状态
 * @type {*[]}
 */
const commodlitystatus: object[] = [
    {val: 0, title: '待上架'},
    {val: 1, title: '上架'},
    {val: 2, title: '下架'},
    {val: 3, title: '待处理'},
];
/**
 * 支付状态
 * @type {*[]}
 * 1未付款 2已付款 3退款中 4部分退款 5已退款
 */
const payStatus: object[] = [
    {val: '1', title: '待支付'},
    {val: '2', title: '支付成功'},
    {val: '3', title: '退款中'},
    {val: '4', title: '部分退款'},
    {val: '5', title: '已退款'},
];
/**
 * 站点管理
 * @type {*[]}
 */
const formatSiteId: object[] = [
    {val: 1, title: '北京'},
    {val: 2, title: '上海'},
    {val: 31, title: '无锡'},
    {val: 4, title: '全国'},
];
/**
 * 广告状态
 * @type {*[]}
 */
const changAdvertisement: object[] = [
    {val: 1, title: '启用'},
    {val: 2, title: '未启用'},
];
/**
 * 平台状态
 * @type {*[]}
 */
const changPlatform: object[] = [
    {val: 1, title: '小程序'},
];
/**
 * 支付方式
 * @type {*[]}
 */
const capitalChannel: object[] = [
    {val: 1, title: '微信'},
    {val: 2, title: '支付宝'},
    {val: 3, title: '银行卡'},
];
/**
 * 用户状态：0正常 1已删除 默认0
 * @type {*[]}
 */
const userIsDel: object[] = [
    {val: '0', title: '正常'},
    {val: '1', title: '已删除'},
];
/**
 * 用户状态：0正常 1封停 默认0
 * @type {*[]}
 */
const userIsSeal: object[] = [
    {val: '0', title: '正常'},
    {val: '1', title: '封停'},
];
/**
 * 退款状态：
 状态：
 101：审核中
 102：拒绝退款
 103：可退款，退款中
 104：退款完成
 105：退款失败
 201：审核中
 202：审核拒绝
 203：审核通过，卖家待发货
 204：买家待收货
 205：补发完成
 111：审核中
 112：拒绝退款
 113：可退款，退款中
 114：退款成功
 * @type {*[]}
 */
const refundStatus: object[] = [
    {val: '101', title: '审核中'},
    {val: '102', title: '拒绝退款'},
    {val: '103', title: '可退款，退款中'},
    {val: '104', title: '退款完成'},
    {val: '105', title: '退款失败'},
    {val: '201', title: '审核中'},
    {val: '202', title: '审核拒绝'},
    {val: '203', title: '审核通过，卖家待发货'},
    {val: '204', title: '买家待收货'},
    {val: '205', title: '补发完成'},
    {val: '111', title: '审核中'},
    {val: '112', title: '拒绝退款'},
    {val: '113', title: '可退款，退款中'},
    {val: '114', title: '退款成功'},
];
/**
 * 售后方式： 1：直接退款 2：补发
 * @type {*[]}
 */
const refundType: object[] = [
    {val: '1', title: '直接退款'},
    // {val:'2',title:'补发'},
];
/**
 * 订单类型： 0：自购 1：cps
 * @type {*[]}
 */
const isCpsProfit: object[] = [
    {val: '0', title: '自购'},
    {val: '1', title: 'cps'},
    // {val:'2',title:'补发'},
];
/**
 * 收益类型： 1：直接退款 2：补发
 * @type {*[]}
 */
const profitType: object[] = [
    {val: '0', title: '自购'},
    {val: '1', title: 'cps'},
    // {val:'2',title:'补发'},
];
/**
 * 物流信息
 * 2:运输中 3:用户已签收 4:用户拒收
 * @type {*[]}
 */
const tmsStatus: object[] = [
    {val: '2', title: '运输中'},
    {val: '3', title: '用户已签收'},
    {val: '4', title: '用户拒收'},
];
/**
 * 支付方式
 * @type {*[]}
 */
// 0未确认，1已确认，2待发货，3已发货，4申请取消，5申请退货，6申请换货，
// 8已签收，50用户拒签，51已取消，52已退货，53部分退货，54已关闭，55已完成',
const orderStatus: object[] = [
    {val: 0, title: '未确认'},
    {val: 1, title: '已确认'},
    {val: 2, title: '待发货'},
    {val: 3, title: '已发货'},
    {val: 4, title: '申请取消'},
    {val: 5, title: '申请退货'},
    {val: 6, title: '申请换货'},
    {val: 8, title: '已签收'},
    {val: 50, title: '用户拒签'},
    {val: 51, title: '已取消'},
    {val: 52, title: '已退货'},
    {val: 53, title: '部分退货'},
    {val: 54, title: '已关闭'},
    {val: 55, title: '已完成'},
];
export default{
    profitType,
    isCpsProfit,
    refundType,
    refundStatus,
    userIsDel,
    userIsSeal,
    orderStatus,
    payStatus,
    capitalChannel,
    orderTradeStatus,
    commodlitystatus,
    formatSiteId,
    changAdvertisement,
    tmsStatus,
    changPlatform,
};
