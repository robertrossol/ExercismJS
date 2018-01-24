
var reverseString = function (input) {
  this.input = input
  // return this.input
  var final = []
  var broken = this.input.split('')
  while (broken.length > 0) {
    final.push(broken.splice(-1))
  }
  return final.join('')
};

module.exports = reverseString;