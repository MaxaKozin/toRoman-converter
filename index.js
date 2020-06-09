const RomanNumerals = {
  romanNumbers: {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  },
  res: 0,
  toRoman(num) {
    let result = '';
    for (let key in this.romanNumbers) {
      while (num >= this.romanNumbers[key]) {
        result += key;
        num -= this.romanNumbers[key];
      }
    }
    return result;
  },
  fromRoman(str) {
    const romanNumbers = {
      CM: 900,
      M: 1000,
      CD: 400,
      D: 500,
      XC: 90,
      C: 100,
      XL: 40,
      L: 50,
      IX: 9,
      X: 10,
      IV: 4,
      V: 5,
      I: 1
    };
    str = str.toUpperCase();
    let index = 0;
    let res = 0;
    for (let key in romanNumbers) {
      index = str.indexOf(key);
      while (index !== -1) {
        res += parseInt(romanNumbers[key], 10);
        str = str.replace(key, "-");
        index = str.indexOf(key);
      }
    }
    return res;
  }
};

const refs = {
  arabInput: document.querySelector('#arab'),
  romanInput: document.querySelector('#roman')
}


const onArabInput = (e) => {
  refs.romanInput.value = RomanNumerals.toRoman(e.target.value);
}

const onRomanInput = (e) => {
  refs.arabInput.value = RomanNumerals.fromRoman(e.target.value);
}

refs.arabInput.addEventListener('input', _.debounce(onArabInput, 500))
refs.romanInput.addEventListener('input', _.debounce(onRomanInput, 500))