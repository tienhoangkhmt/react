const formData = (url, method, data) => fetch(url, {
  method: method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

const getData = url => fetch(url)

const formRepairData = (url, method, data, id) => fetch(`${url}${id}`, {
  method: method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

const formDeleteData = (url, method, id) => fetch(`${url}${id}`, {
  method: method,
  headers: {
    'Content-Type': 'application/json'
  }
})

export {
  formData,
  getData,
  formRepairData,
  formDeleteData
}
