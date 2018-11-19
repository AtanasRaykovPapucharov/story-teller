const url = 'https://storytellerapi.herokuapp.com/api/story/'

const data = $ => {
    const stories = require('./data-requester')($)

    return {
        allStories: () => {
            return stories.get(url)
        },
        storyById: (id) => {
            return stories.get(url + id)
        }
    }
}

module.exports = data