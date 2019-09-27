const fs = require('fs')
const path = require('path')

const MarkdownIt = require('markdown-it')
const glob = require('glob')
const ejs = require('ejs')
const fm = require('front-matter')

const md = new MarkdownIt()

async function buildMarkdown (cb) {
  try {
    const distPath = path.resolve(__dirname, './dist')
    const mdPath = path.resolve(__dirname, './docs/*.md')
    const templateHtml = await fs.readFileSync(path.resolve(__dirname, './templates/default.ejs'), 'utf-8')
    const mdFiles = await glob.sync(mdPath)
    if (await !fs.existsSync(distPath)){
      await fs.mkdirSync(distPath)
    }
    for (const file of mdFiles) {
      const mdText = fs.readFileSync(file, 'utf-8')
      const mdOutputPath = path.join(distPath, `./${path.basename(file, '.md')}.html`)
      const { attributes, body } = fm(mdText)
      const bodyRendered = md.render(body)
      const html = ejs.render(templateHtml, { body: bodyRendered, attributes })
      await fs.writeFileSync(mdOutputPath, html)
    }
    cb()
  } catch (error) {
    cb(error)
  }
}

exports.default = buildMarkdown
