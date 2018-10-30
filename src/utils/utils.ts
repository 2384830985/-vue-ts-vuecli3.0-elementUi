const util = {
    deep: (params: any) => {// 深拷贝
        if (params == '') { return ''; }
        let obj = {};
        obj = JSON.parse(JSON.stringify(params));
        return obj;
  },
};
export default util;
