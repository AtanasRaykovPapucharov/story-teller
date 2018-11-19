module.exports = $ => {
    function _sendRequest(method, url, headers, data) {
        const JSON = 'application/json'
        headers = headers || {}
        data = data || {}
        const contentType = headers.contentType || JSON
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                method,
                contentType,
                data,
                headers,
                success: (response) => {
                    resolve(response)
                },
                error: (err) => {
                    reject(err)
                }
            })
        })
    }
    return {
        get: (url, headers) => {
            return _sendRequest('GET', url, headers)
        },
        post: (url, headers, data) => {
            return _sendRequest('POST', url, headers, data)
        },
        put: (url, headers, data) => {
            return _sendRequest('PUT', url, headers, data)
        },
        delete: (url, headers, data) => {
            return _sendRequest('DELETE', url, headers, data)
        }
    }
}