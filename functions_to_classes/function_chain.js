const calc = {
    total: 0,
    add: function (val){this.total = val + this.total; return this},
    multiply: function (val){this.total = val * this.total; return this},
    subtract: function (val){ this.total = this.total - val; return this},
}


const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total)