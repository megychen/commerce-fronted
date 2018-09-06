import axios from 'axios'

export function getNewsList (pageSize = 10, pageNo = 1, search) {
  return new Promise((resolve, reject) => {
    axios.get('/api/posts', {
      params: {
        pageNo: pageNo,
        pageSize: pageSize,
        search: search
      }
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}
