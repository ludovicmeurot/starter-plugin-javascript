import build from './build';

const config = require('../build.config.json')

export default Object.assign(build, {
    input: config['app']['input']['modular'],
    output: Object.assign(build.output, {
        format: 'esm',
        file: config['app']['output']['directory']  + config['app']['output']['filename'] + '.esm.modular.js',
    })
})
