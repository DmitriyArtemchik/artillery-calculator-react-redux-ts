/*

Пример использования Math.floor10(10.3467, 0);


// Десятичное округление к ближайшему
Math.round10 = function(value, exp) {
  return DecimalAdjust('round', value, exp);
};

// Десятичное округление вниз
Math.floor10 = function(value, exp) {
  return DecimalAdjust('floor', value, exp);
};

// Десятичное округление вверх
Math.ceil10 = function(value, exp) {
  return DecimalAdjust('ceil', value, exp);
};
*/
// @ts-ignore
function DecimalAdjust(type, value, exp) {
    // @ts-ignore
    if (typeof exp === 'undefined' || +exp === 0) { return Math[type](value);} // ошибки нет

    value = +value;
    exp = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {return NaN;}

    value = value.toString().split('e');
    // @ts-ignore
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))); // ошибки нет
    value = value.toString().split('e');

    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  
  export default DecimalAdjust;