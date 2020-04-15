import banner from './banner'
import babel from 'rollup-plugin-babel'

const config = require('../build.config.json')

export default {
    output: {
        name: config['app']['name'],
        banner
    },
    plugins : [
        babel({
            plugins: [
                // '@babel/external-helpers',
                '@babel/transform-object-assign'
            ],
        })
    ]
}