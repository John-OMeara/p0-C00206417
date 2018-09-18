var path = require('path');
var expect = require('chai').expect;

var modulo_first = require(path.join(__dirname, '..', './modulo_first.js'));

describe('modulo_first()', function () {
  'use strict';

  it('exists', function () {
    expect(modulo_first).to.be.a('function');

  });

  it('gets modulo', function () {
    expect(modulo_first(5)).to.equal(modulo_first(5%5));
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
