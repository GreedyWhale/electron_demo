const isDevelopment = () => process.env.NODE_ENV === 'development'

const getRenderUrl = () => {
  const url = require('url')
  const path = require('path')
  let renderUrl = 'http://localhost:3000/'
  if (!isDevelopment()) {
    renderUrl = url({
      protocol: 'file',
      pathname: path.resolve('dist/index.html')
    })
  }
  return renderUrl
}

module.exports = {
  isDevelopment,
  getRenderUrl
}
