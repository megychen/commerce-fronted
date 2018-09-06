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

export function getEntrepreneurInfo (id) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/entrepreneurs/${id}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function createEntrepreneurs (data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/entrepreneurs', data).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function deleteEntrepreneur (id) {
  return new Promise((resolve, reject) => {
    axios.delete(`/api/entrepreneurs/${id}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}
