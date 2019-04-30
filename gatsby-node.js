const Debug = require('debug')
const fs = require('fs')
const mkdirp = require('mkdirp')

// make sure src/pages exists for the filesystem source
exports.onPreBootstrap = ({ store }) => {
  const debug = Debug('gatsby-theme-prismic-starter:onPreBoostrap')

  const { program } = store.getState()
  const dir = `${program.directory}/src/pages`
  debug(`ensuring ${dir} exists`)

  if (!fs.existsSync(dir)) {
    debug(`creating ${dir}`)
    mkdirp.sync(dir)
  }
}
