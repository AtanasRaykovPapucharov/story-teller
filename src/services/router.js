const $ = require('jquery')
const controller = require('./router-controller')($)

const Navigo = require('navigo')
const router = new Navigo(null, true)

router
    .on({
        '/home': () => {
            return controller.renderHome()
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

module.exports = router