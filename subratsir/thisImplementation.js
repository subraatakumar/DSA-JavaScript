// Implementation of this
const calc = {
  total: 0,
  add(a){
    this.total += a;
    return this;
  },
  multiply(a){
    this.total *= a;
    return this;
  },
  subtract(a){
    this.total -= a;
    return this;
  },
  divide(a){
    this.total /= a;
    return this;
  },
  
}
const result = calc.add(10).divide(5).subtract(15);
console.log(result.total)
