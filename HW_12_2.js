
// задача_2
const math = {
    result: 0,
    showResult: function() {
        return this.result;
    },
    sum: function(i) {
        this.result = this.result + i;
        return this;
    },
    minus: function(i) {
        this.result = this.result - i;
        return this;
    },
    multiplay: function(i) {
        this.result = this.result * i;
        return this;
    }
}

math.sum(2).sum(2).minus(2).multiplay(2).showResult();
console.log(math.result);