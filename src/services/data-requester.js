const TYPE_JSON = 'application/json'

const requester = url => {
    return {
        getAll: () => {
            return fetch(url)
        },
        getById: (id) => {
            return fetch(`${url}/:${id}`)
        },
        post: (obj) => {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': TYPE_JSON
                }
            })
        },
        delete: (id) => {
            return fetch(`${url}/:${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': TYPE_JSON
                }
            })
        },
        update: (id, updateObj) => {
            return fetch(`${url}/:${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    updateObj
                }),
                headers: {
                    'Content-Type': TYPE_JSON
                }
            })
        }
    }
}

module.exports = requester
