const fs = require('fs').promises
const path = require('path')

const fileContent = `<script>(() => {window.location.href = new URL('./en-US/', location.href).href})()</script>`

const filePath = path.join(__dirname, 'dist/static/index.html')
fs.writeFile(filePath, fileContent)
  .then(() => console.log(`index.html created in ${filePath}`))
