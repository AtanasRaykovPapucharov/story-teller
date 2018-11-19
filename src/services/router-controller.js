const controller = $ => {
    const data = require('./data')($)
    const view = require('./view')($)

    return {
        renderHome: () => {
            return view.load('home', '#content-wrapper')
        },
        renderStories: () => {
            data.allStories()
                .then(stories => {
                    return view.load('story-list', '#content-wrapper', {data: stories})
                })
        },
        renderStory: id => {
            data.storyById(id)
                .then(story => {
                    return view.load('story', '#content-wrapper', {data: story})
                })
                .catch(e => {
                    console.log(e)
                    
                })
        },
        renderVideos: () => {
            return view.load('video', '#content-wrapper')
        },
        renderChat: () => {
            return view.load('chat', '#content-wrapper')
        }
    }
}

module.exports = controller