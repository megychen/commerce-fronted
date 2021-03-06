import axios from 'axios'

export function getCompaniesList (pageSize = 10, pageNo = 1) {
  return new Promise((resolve, reject) => {
    axios.get('/api/companies', {
      params: {
        pageNo: pageNo,
        pageSize: pageSize
      }
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function getCompanyInfo (id) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/companies/${id}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function createCompanies (data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/companies', data).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function deleteCompany (id) {
  return new Promise((resolve, reject) => {
    axios.delete(`/api/companies/${id}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}
