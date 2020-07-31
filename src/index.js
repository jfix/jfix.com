const path = require('path')
const Metalsmith = require('metalsmith')
const metadata = require('metalsmith-metadata')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const debug = require('metalsmith-debug')
const permalinks  = require('metalsmith-permalinks')

Metalsmith(__dirname)
.use(debug())
.source('../site')
.destination('../docs')
.metadata({
    author: 'Jakob Fix',
    site: 'https://jfix.com'
})
.use(markdown())
.use(layouts({
    "directory": "../layouts",
    "default": "layout.njk"
}))
.use(permalinks())
.build(function(err) {
    if (err) throw err
})
