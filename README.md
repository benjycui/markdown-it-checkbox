# markdown-it-checkboxes [![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url]

> Plugin to create checkboxes for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

This plugin allows to create checkboxes for tasklists as discussed [here](http://talk.commonmark.org/t/task-lists-in-standard-markdown/41).



## Usage

## Install

node.js, browser:

```bash
npm install markdown-it-checkboxes --save
bower install markdown-it-checkboxes --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-checkboxes'));

md.render('[ ] unchecked') // =>
// <p>
//  <input type="checkbox" id="checkbox0">
//  <label for="checkbox0">unchecked</label>
// </p>

md.render('[x] checked') // =>
// <p>
//  <input type="checkbox" id="checkbox0" checked="true">
//  <label for="checkbox0">checked</label>
// </p>
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitCheckbox`.

## Options

```js
var md = require('markdown-it')()
            .use(require('markdown-it-checkboxes'),{
              divWrap: true,
              divClass: 'cb',
              idPrefix: 'cbx_'
            });

md.render('[ ] unchecked') // =>
// <p>
//  <div classname="cb">
//    <input type="checkbox" id="cbx_0">
//    <label for="cbx_0">unchecked</label>
//  </div>
// </p>
```

## divWrap

* **Type:** `Boolean`
* **Default:** `false`

wrap div arround checkbox. this makes it possible to use it for example with [Awesome Bootstrap Checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox/).

## divClass

* **Type:** `String`
* **Default:** `checkbox`

classname of div wrapper. will only be used if `divWrap` is enanbled.

## idPrefix

* **Type:** `String`
* **Default:** `checkbox`

the id of the checkboxs input contains the prefix and an incremental number starting with `0`. i.e. `checkbox1` for the 2nd checkbox.


## License

[MIT License](https://github.com/benjycui/markdown-it-checkboxes/blob/master/LICENSE) © 2015 Markus Cecot

[npm-url]: https://npmjs.org/package/markdown-it-checkboxes
[npm-image]: https://img.shields.io/npm/v/markdown-it-checkboxes.svg

[travis-url]: http://travis-ci.org/benjycui/markdown-it-checkboxes
[travis-image]: https://secure.travis-ci.org/benjycui/markdown-it-checkboxes.svg?branch=master

[coveralls-url]: https://coveralls.io/r/benjycui/markdown-it-checkboxes
[coveralls-image]: https://img.shields.io/coveralls/benjycui/markdown-it-checkboxes.svg

[depstat-url]: https://david-dm.org/benjycui/markdown-it-checkboxes
[depstat-image]: https://david-dm.org/benjycui/markdown-it-checkboxes.svg

[devdepstat-url]: https://david-dm.org/benjycui/markdown-it-checkboxes#info=devDependencies
[devdepstat-image]: https://david-dm.org/benjycui/markdown-it-checkboxes/dev-status.svg
