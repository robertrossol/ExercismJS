var DnaTranscriber = function() {
};

DnaTranscriber.prototype.toRna = function (input) {
  var conversion = {};
  conversion['C'] = 'G';
  conversion['G'] = 'C';
  conversion['T'] = 'A';
  conversion['A'] = 'U';
  if (input.replace(/C/g, '').replace(/G/g, '').replace(/T/g, '').replace(/A/g, '').split('').length > 0) {
    throw Error('Invalid input');
  }
  var rna = ''
  input.split('').forEach(function(nucleotide) {
    rna += conversion[nucleotide];
  });
  return rna
};

module.exports = DnaTranscriber;