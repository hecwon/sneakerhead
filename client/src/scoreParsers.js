
module.exports = {
  yearParser: (rawInput, rawActual) => {
    if (rawInput === '') {
      return 0;
    }
    if (JSON.parse(rawInput) === rawActual) {
      return 1;
    }
    return 0;
  },

  nameParser: (rawInput, rawActual) => {
    if (rawInput === '') {
      return 0;
    }
    // ----------------- Noramlizer Functions -----------------
    let input = rawInput.toLowerCase();
    let actual = rawActual.toLowerCase();
    // Air Remover
    if (actual.indexOf('Air ') !== -1) {
      actual = actual.replace('Air ', '');
    }
    // (W) Remover
    if (actual.indexOf(' (W)') !== -1) {
      actual = actual.replace(' (W)', '');
    }
    // Year Remover
    if (actual.indexOf('(') !== -1) {
      actual = actual.substring(0, actual.indexOf('(') - 1)
      console.log('actual after cutting: ', actual);
    }
    // --------------------------------------------------------
    const splitInput = input.split(' ');
    const splitActual = actual.split(' ');
    let correct = 0;
    for (var i = 0; i < splitInput.length; i++) {
      if (splitActual.indexOf(splitInput[i]) !== -1) {
        correct++;
      }
    }
    const totalWordsInName = splitActual.length;
    let rawScorePercent = correct/totalWordsInName;
    // Bred Condition
    if (actual.indexOf('black varsity red') !== -1 && input.indexOf('bred') !== -1) {
      rawScorePercent === 1;
    }
    return rawScorePercent;
  },

  shoeParser: (input, actual) => {
    if (input === '') {
      return 0;
    }
    console.log('input: ', input, ', actual: ', actual)
    if (actual.indexOf('Jordan ') !== -1) {
      actual = actual.replace('Jordan ', '');
    }
    if (actual.indexOf(' Retro') !== -1) {
      actual = actual.replace(' Retro', '');
    }

    const splitInput = input.split(' ');
    const splitActual = actual.split(' ');
    const rawScore = splitActual.reduce((memo, currWord) => {
      if (splitInput.indexOf(currWord) !== -1) {
        console.log('word found')
        return memo = memo + 1;
      } else {
        console.log(splitInput.indexOf(currWord));
        return memo;
      }
    }, 0)
    return rawScore/splitActual.length;
  },

  genderParser: (input, actual) => {
    if (input === '') {
      return 0;
    }
    if (input.toLowerCase() === actual) {
      return 1;
    }
    return 0;
  },
}