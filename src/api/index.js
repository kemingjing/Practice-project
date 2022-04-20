//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";
import mockRequests from "./mockAjax";
//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
export const reqgetCategoryList = () =>mockRequests.get("/categoryList");
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get("/banner");

//当前这个接口（获取搜索模块的数据）
export const reqGetSearchInfo = (params)=>mockRequests({url:"/searchInfo",method:"post",data:params});



