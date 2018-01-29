import { wxRequest } from '../utils/wxRequest'

let env = '-test'
const apimail = 'https://sujiefs.com/'
// 首页banner
const getAdList = (params) => wxRequest(params, apimail + '/api/adverts/list')
// 首页发现更多商品
const getHomeDiscoverList = (params) => wxRequest(params, apimail + '/api/mall/discoverList')
// 店铺详情(home_detail)
const hostGoodsList = (params) => wxRequest(params, apimail + 'api/home/hostGoodsList')
// 查询商品列表
const getGoodsList = (params) => wxRequest(params, apimail + '/api/mall/searchGoodsList')

const goodsDetail = (params) => wxRequest(params, apimail + '/api/mall/goods')
module.exports = {
  getAdList,
  getHomeDiscoverList,
  hostGoodsList,
  getGoodsList,
  goodsDetail
}
