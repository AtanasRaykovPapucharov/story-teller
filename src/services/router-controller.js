const data = require('./data')

const controller = $ => {
    const view = require('./view')($)

    return {
        renderHome: () => {
            data.allStories().then(res => {
                console.log(res)
            })
        }
    }
}

module.exports = controller