'use strict';
var generate, path, should;

path = require('path');

generate = require('markdown-it-testgen');

should = require('should');


/*eslint-env mocha */

describe('markdown-it-checkbox', function() {
  describe('markdown-it-checkbox()', function() {
    var md, plugin;
    plugin = require('../');
    md = require('markdown-it')();
    md.use(plugin, {
      divWrap: false
    });
    generate(path.join(__dirname, 'fixtures/checkbox.txt'), md);
    return it('should pass irrelevant markdown', function(done) {
      var res;
      res = md.render('# test');
      res.toString().should.be.eql('<h1>test</h1>\n');
      return done();
    });
  });
  return describe('markdown-it-checkbox(options)', function() {
    var plugin;
    plugin = require('../');
    it('should should optionally wrap arround a div layer', function(done) {
      var md, res;
      md = require('markdown-it')();
      md.use(plugin, {
        divWrap: true
      });
      res = md.render('[X] test written');
      res.toString().should.be.eql('<p>' + '<div class="checkbox">' + '<input type="checkbox" id="checkbox0" checked="true">' + '<label for="checkbox0">test written</label>' + '</div>' + '</p>\n');
      return done();
    });
    it('should should optionally change class of div layer', function(done) {
      var md, res;
      md = require('markdown-it')();
      md.use(plugin, {
        divWrap: true,
        divClass: 'cb'
      });
      res = md.render('[X] test written');
      res.toString().should.be.eql('<p>' + '<div class="cb">' + '<input type="checkbox" id="checkbox0" checked="true">' + '<label for="checkbox0">test written</label>' + '</div>' + '</p>\n');
      return done();
    });
    return it('should should optionally change the id', function(done) {
      var md, res;
      md = require('markdown-it')();
      md.use(plugin, {
        idPrefix: 'cb'
      });
      res = md.render('[X] test written');
      res.toString().should.be.eql('<p>' + '<input type="checkbox" id="cb0" checked="true">' + '<label for="cb0">test written</label>' + '</p>\n');
      return done();
    });
  });
});
