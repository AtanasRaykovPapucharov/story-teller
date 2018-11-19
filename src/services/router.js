const Navigo = require('navigo')
const router = new Navigo(null, true)

const routes = $ => {
    const controller = require('./router-controller')($)

    router
        .on({
            '/home': () => {
                return controller.renderHome()
            },
            '/stories': () => {
                return controller.renderStories()
            },
            '/story/:id': (params) => {
                return controller.renderStory(params.id)
                
            },
            '/videos': () => {
                return controller.renderVideos()
            },
            '/chat': () => {
                return controller.renderChat()
            },
            '/': () => {
                router.navigate('/home')
            },
            '*': () => {
                router.navigate('/home')
            }
        })
        .notFound(() => {
            alert('Error! Router not found!')
        })
        .resolve()
}


module.exports = routes