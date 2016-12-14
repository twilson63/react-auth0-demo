const fetch = require('isomorphic-fetch')

module.exports = function () {
  const setAuth = () => 'Bearer ' + window.localStorage.getItem('id_token')
  const get = (model, id) =>
    fetch(`http://localhost:4000/${model}/${id}`, {
      headers: {
        Authorization: setAuth()
      }
    })
      .then(res => res.json())


  return {
    get
  }
}
