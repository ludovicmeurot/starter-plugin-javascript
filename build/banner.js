const data = require('../package.json')
const config = require('../build.config.json')

export default `/*!
* ${config['app']['name']}.js v${data.version}
* (c) 2020-${new Date().getFullYear()} ${data.author}
* ${config['licence']}
*/`