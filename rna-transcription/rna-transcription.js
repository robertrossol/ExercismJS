var DnaTranscriber = function() {
};

DnaTranscriber.prototype.toRna = function (input) {
  var conversion = {};
  conversion['C'] = 'G';
  conversion['G'] = 'C';
  conversion['T'] = 'A';
  conversion['A'] = 'U';

  // if (input delete('CGTA').isEmpty) {

  var rna = ''
  input.split('').forEach(function(nucleotide) {
    rna += conversion[nucleotide];
  });
  return rna


};

module.exports = DnaTranscriber;