const data = require('./data')

const controller = $ => {
    const view = require('./view')($)

    return {
        renderHome: () => {
            data.allStories()
                .then(stories => {
                    console.log(stories)
                })
        }
    }
}

module.exports = controller