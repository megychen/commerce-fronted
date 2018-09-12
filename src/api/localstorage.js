export function getLocalStorageInfo (type) {
  try {
    return localStorage[type]
  } catch (e) {}
}

export function setLocalStorageInfo (type, value) {
  try {
    localStorage[type] = value
    console.log(value, localStorage[type])
  } catch (e) {}
}
