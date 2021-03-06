import build from './build';

const config = require('../build.config.json')

export default Object.assign(build, {
    input: config['app']['input']['complete'],
    output: Object.assign(build.output, {
        format: 'umd',
        file: config['app']['output']['directory']  + config['app']['output']['filename'] + '.js',
    })
})
