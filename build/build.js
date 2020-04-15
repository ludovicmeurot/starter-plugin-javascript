import banner from './banner'

const config = require('../build.config.json')

export default {
    output: {
        name: config['app']['name'],
        banner
    },
    plugins : []
}