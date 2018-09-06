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

export function getNewInfo (id) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/posts/${id}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function createNews (data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/posts', data).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function deleteNew (id) {
  return new Promise((resolve, reject) => {
    axios.delete(`/api/posts/${id}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}
