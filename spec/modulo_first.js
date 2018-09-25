var path = require('path');
var expect = require('chai').expect;

var modulo_first = require(path.join(__dirname, '..', './modulo_first.js'));

describe('modulo_first()', function () {
  'use strict';

  it('exists', function () {
    expect(modulo_first).to.be.a('function');

  });

  it('gets modulo', function () {
    expect(modulo_first([5])).to.deep.equal([5%5]);
  });

  it('does something else', function () {
    expect(modulo_first([2,3,4,5])).to.deep.equal([0,1,0,1]);
  });

  it('matches sample', function() {
    expect(modulo_first([4,2,8,3,9,4,10,5,11,6])).to.deep.equal([0,2,0,3,1,0,2,1,3,2]);
  })

  // n%0 should be NaN
  it('check zero', function() {
    expect(modulo_first([0,6,3,8,4])).to.deep.equal([NaN, NaN, NaN, NaN, NaN]);
  })
});
