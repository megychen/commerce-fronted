import axios from 'axios'

export function signin (name, password) {
  return new Promise((resolve, reject) => {
    axios.post('/api/signin', {
      name: name,
      password: password
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function signup (name, password, rePass) {
  return new Promise((resolve, reject) => {
    axios.post('/api/signup', {
      name: name,
      password: password,
      rePass: rePass
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function getUsersList (pageSize = 10, pageNo = 1) {
  return new Promise((resolve, reject) => {
    axios.get('/api/users', {
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

export function setUserAdmin (id, isAdmin) {
  return new Promise((resolve, reject) => {
    axios.patch(`/api/users/${id}`, {
      isAdmin: !isAdmin
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}

export function resetUserPass (id, newPass, newRepass) {
  return new Promise((resolve, reject) => {
    axios.patch(`/api/users/${id}/reset`, {
      newPass: newPass,
      newRepass: newRepass
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(new Error(err))
    })
  })
}
