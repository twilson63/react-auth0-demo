const fetch = require('isomorphic-fetch')

module.exports = function () {
  const get = (model, id) =>
    fetch(`http://localhost:4000/${model}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('id_token')
      }
    })


  return {
    get,
    list,
    post,
    put
  }
}
