/*! modulo_first v0.0.0 - MIT license */
'use strict';

// NAME:   John O'Meara
// ID:     C00206417

/*
Name: modulo_first
The first integer in the list is n. Replace each integer by itself mod n.
Sample Input: 4 2 8 3 9 4 10 5 11 6
Sample Output: 0 2 0 3 1 0 2 1 3 2 
*/

var modulo_first = function (list) {
  var n = list[0];

  for(var i=0; i < list.length; i++){
    list[i] = list[i]%n;
  }
  
  return(list);
}

if ( typeof module !== "undefined" ) {
  module.exports = modulo_first;
}