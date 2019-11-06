let parser = require('@architect/shared/parser')
let fs = require('fs')
let { join } = require('path')
let read = file => fs.readFileSync(file).toString()

module.exports = function template() {
  let raw = read(join(__dirname, `index.md`))
  let parsed = parser(raw)
  let {
    title,
    description,
    hero,
    subhead,
    intro,
    whatIsFASTstackHeader,
    whatIsFASTstack,
    functionsHeader, functions,
    APIsHeader, APIs,
    storageHeader, storage,
    testabilityHeader, testability,
    getStartedHeader,
    getStarted,
    message
  } = parsed
  let body = `
  <header
    class="
      padding-top3
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
        FASTstack
      </h1>
      <h2
        class="
          margin-bottom-1
          font-size1
          text-shadow-drop
          sans-serif
        "
      >
        ${hero}
      </h2>
      <h4
        class="
          font-size0
          font-weight-medium
          sans-serif
        "
      >
        ${subhead}
      </h4>
    </div>
  </header>

  <section
    class="
      padding1
      font-size0
    "
  >
    <div
      class="
        max-width
        margin-auto
      "
    >
      <div
        class="
          margin-bottom3
          font-weight-medium
        "
      >
        ${intro}
      </div>

      <div
        class="
          margin-bottom3
        "
      >
        <h3
          class="
            font-size1
            font-size2-desktop
            margin-bottom-1
            sans-serif
          "
        >
          ${whatIsFASTstackHeader}
        </h3>

        ${whatIsFASTstack}
      </div>

      <div
        class="
          margin-bottom2
        "
      >
        <h2
          class="
            margin-bottom-4
            margin-bottom-2-desktop
            font-size2
            font-size3-desktop
            font-style-italic
            color-dark
            sans-serif
          "
        >
          ${functionsHeader}
        </h2>
        ${functions}
      </div>

      <div
        class="
          margin-bottom2
        "
      >
        <h2
          class="
            margin-bottom-4
            margin-bottom-2-desktop
            font-size2
            font-size3-desktop
            font-style-italic
            color-dark
            sans-serif
          "
        >
          ${APIsHeader}
        </h2>
        ${APIs}
      </div>

      <div
        class="
          margin-bottom2
        "
      >
        <h2
          class="
            margin-bottom-4
            margin-bottom-2-desktop
            font-size2
            font-size3-desktop
            font-style-italic
            color-dark
            sans-serif
          "
        >
          ${storageHeader}
        </h2>
        ${storage}
      </div>

      <div
        class="
          margin-bottom2
        "
      >
        <h2
          class="
            margin-bottom-4
            margin-bottom-2-desktop
            font-size2
            font-size3-desktop
            font-style-italic
            color-dark
            sans-serif
          "
        >
          ${testabilityHeader}
        </h2>
        ${testability}
      </div>

  </section>
  <footer
    class="
      padding-top8
      padding-right1
      padding-bottom3
      padding-left1
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
    <h3
      class="
        margin-bottom0
        font-size0
        font-style-italic
        sans-serif
      "
    >
      ${getStartedHeader}
    </h3>

    <div
      class="
        margin-bottom2
      "
    >
      ${getStarted}
    </div>

      ${message}
   </div>
  </footer>
  `
  return { title, description, body }
}
