const $ = require('jquery')

require('./router')($)

$(() => { // HEADER Scroll
    const header$ = $('body .wrapper header.header')
    const windowHeight = $(window).height()
    $(window).on('scroll', function () {
        let elem = header$
        let state = $(this).scrollTop()

        if (state - 20 > windowHeight) {
            elem.css({
                'position': 'fixed',
                'top': '0',
                'width': '100%'
            })
        } else {
            elem.css({
                'position': 'inherit'
            })
        }
    })
})

$(() => { // CIRCLE
    let angle = 0

    $("#parent .child").on('click', e => {
        angle += 30

        $("#parent").css({
            transform: 'rotate(' + angle + 'deg)'
        })
        $("#parent .child").css({
            transform: 'rotate(-' + angle + 'deg)'
        })
    })
})