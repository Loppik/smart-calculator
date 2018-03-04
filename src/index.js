class SmartCalculator {
  constructor(initialValue) {
    this.str = initialValue.toString();
    this.toString = function() {return this.translateToInt();};
  }


  add(number) {
    this.str += "+" + number.toString();
    return this;
  }

  subtract(number) {
    this.str += "-" + number.toString();
    return this;
  }

  multiply(number) {
    this.str += "*" + number.toString();
    return this;
  }

  devide(number) {
    this.str += "/" + number.toString();
    return this;
  }

  pow(number) {
    this.str += "**" + number.toString();
    return this;
  }

  translateToInt() {
    return eval(this.str);
  }

}


module.exports = SmartCalculator;
