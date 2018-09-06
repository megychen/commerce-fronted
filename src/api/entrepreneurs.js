import axios from 'axios'

export function getEntrepreneursList (pageSize = 10, pageNo = 1) {
  return new Promise((resolve, reject) => {
    axios.get('/api/entrepreneurs', {
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
