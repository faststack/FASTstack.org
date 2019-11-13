let parser = require('@architect/shared/parser')
let fs = require('fs')
let {join} = require('path')
let read = file => fs.readFileSync(file).toString()

module.exports = function template () {
  let raw = read(join(__dirname, `index.md`))
  let parsed = parser(raw)
  let {
    title,
    description,
    intro,
    message
  } = parsed
  let body = /*html*/`
  <header
    class="
      padding-top2
      padding-top3-desktop
      padding-right1
      padding-right3-desktop
      padding-bottom5
      padding-bottom8-desktop
      padding-left1
      padding-left3-desktop
      background-image-linear-gradient1
      clip-path-slant
      clip-path-slant-desktop
    "
  >
    <div
      class="
        max-width
        margin-auto
        color-light
      "
    >
      <h1
        class="
          margin-bottom-7
          font-size4
          font-size6-desktop
          font-weight-black
          font-style-italic
          text-shadow-drop
          text-shadow-drop-desktop
          sans-serif
        "
      >
        <a
          href="/"
          class="
            color-white
            text-decoration-none
          "
        >
          FASTstack
        </a>
      </h1>
      <h2
        class="
          margin-bottom-1
          font-size2
          text-shadow-drop
          sans-serif
        "
      >
        Get Started with the FASTstack
      </h2>
    </div>
  </header>
  <section
    class="
      padding-top3
      padding-right1
      padding-bottom1
      padding-left1
      font-size0
      font-size1-desktop
    "
  >
    <div
      class="
        max-width
        margin-auto
      "
    >
      ${intro}
    </div>
  </section>
  <footer
    class="
      padding-top4
      padding-right1
      padding-right3-desktop
      padding-bottom3
      padding-left1
      padding-left3-desktop
      text-align-end
      background-dark
      color-light
      clip-path-slant1
    "
  >
   <div
    class="
      max-width
      margin-auto
    "
   >
    ${message}
   </div>
  </footer>
  `
  return {title, description, body}
}
