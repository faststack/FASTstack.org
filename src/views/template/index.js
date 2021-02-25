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
  <!-- COMMON TAGS -->
  <meta charset=utf-8>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">

  <!-- Search Engine -->
  <meta name="description" content="Build secure, fast, sophisticated sites and applications with Functions, APIs, Storage, and Testability.">
  <meta name="image" content="https://faststack.org/_static/meta.png">
  <!-- Schema.org for Google -->
  <meta itemprop="name" content="The FASTstack">
  <meta itemprop="description" content="Build secure, fast, sophisticated sites and applications with Functions, APIs, Storage, and Testability.">
  <meta itemprop="image" content="https://faststack.org/_static/meta.png">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="The FASTstack">
  <meta name="twitter:description" content="Build secure, fast, sophisticated sites and applications with Functions, APIs, Storage, and Testability.">
  <meta name="twitter:site" content="@begin">
  <meta name="twitter:image:src" content="https://faststack.org/_static/meta.png">

  <!-- Open Graph general (Facebook, Pinterest & Google+) -->
  <meta name="og:title" content="The FASTstack">
  <meta name="og:description" content="Build secure, fast, sophisticated sites and applications with Functions, APIs, Storage, and Testability.">
  <meta name="og:image" content="https://faststack.org/_static/meta.png">
  <meta name="og:url" content="https://faststack.org/">
  <meta name="og:site_name" content="The FASTstack">
  <meta name="og:type" content="website">

  <!---Styles--->
  <link rel="stylesheet" href="/_static/styles.css">
  <meta name="theme-color" content="#FF092C">
</head>
<body>
  ${body}
</body>
</html>
  `
}
