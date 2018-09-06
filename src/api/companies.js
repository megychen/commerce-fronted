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
