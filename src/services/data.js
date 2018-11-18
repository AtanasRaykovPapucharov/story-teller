const storiesAPI = 'https://storytellerapi.herokuapp.com/api/story/'
const stories = require('./data-requester')(storiesAPI)

const data = {
    allStories: () => {
        return stories.getAll().then(stories => stories.json())
    },
    storyById: (id) => {
        return stories.getById(id)
            .then(story => {
                return story.json()
            })
    }
}

module.exports = data