const TemplateLoader = require('./view-loader')

module.exports = $ => {
    const templateLoader = new TemplateLoader($)

    return {
        load: (component, selectorId, data) => {
            const template = `./components/${component}/${component}.html`

            return templateLoader.load(selectorId, template, data)
        }
    }
}