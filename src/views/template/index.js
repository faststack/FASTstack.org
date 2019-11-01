module.exports = function template (props) {
  let {
    title='FASTstack',
    description='FASTstack.org',
    body=''
  } = props
  return /*html*/`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>
    ${body}
  </body>
</html>
  `
}
