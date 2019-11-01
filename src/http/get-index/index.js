let arc = require('@architect/functions')
let template = require('@architect/views/template')

async function index (req) {
  if (req.path === '/') {
    // eslint-disable-next-line
    let content = require('@architect/views/index')
    let body = template(content())
    return {
      headers: {'content-type': 'text/html; charset=utf8'},
      body
    }
  }
}

async function getStarted (req) {
  if (req.path === '/get-started') {
    // eslint-disable-next-line
    let content = require('@architect/views/get-started')
    let body = template(content())
    return {
      headers: {'content-type': 'text/html; charset=utf8'},
      body
    }
  }
}

function notFound (req) {
  return {
    statusCode: 404,
    headers: {'content-type': 'text/html; charset=utf8'},
    body: 'Sorry, page not found'
  }
}

exports.handler = arc.http.async(index, getStarted, notFound)
