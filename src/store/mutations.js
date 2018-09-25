import * as types from './mutations-type'

const mutations = {
  [types.SET_NEWS] (state, news) {
    state.news = news
  },
  [types.SET_COMPANIES] (state, companies) {
    state.companies = companies
  },
  [types.SET_ENTREPRENEURS] (state, entrepreneurs) {
    state.entrepreneurs = entrepreneurs
  },
  [types.SET_NEWS_TOTAL] (state, total) {
    state.newsTotal = total
  },
  [types.SET_COMPANIES_TOTAL] (state, total) {
    state.companiesTotal = total
  },
  [types.SET_ENTREPRENEURS_TOTAL] (state, total) {
    state.entrepreneursTotal = total
  }
}

export default mutations
