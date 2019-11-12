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
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="/_static/styles.css">
  </head>
  <body>
    ${body}
  </body>
</html>
  `
}
