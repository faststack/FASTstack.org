let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>FASTstack</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>

    <h1 class="center-text">
      <a href="https://twitter.com/brianleroux/status/1187832346575282177" class="link">FASTstack</a>
    </h1>

    <h2 class="center-text">
      Functions
    </h2>

    <h2 class="center-text">
      APIs
    </h2>

    <h2 class="center-text">
      Storage
    </h2>

    <h2 class="center-text">
      Testability
    </h2>

    <p class="center-text" style="margin-top: 100px">
      Help us build the <a href="https://github.com/faststack/FASTstack.org" class="link">FASTstack.org site on GitHub</a>
    </p>

  </body>
</html>
`

exports.handler = async function http(req) {
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body
  }
}
