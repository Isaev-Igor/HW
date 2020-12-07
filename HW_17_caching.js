function sumFunction(arg1, arg2) {
    return arg1 + arg2;
}


function cache(func) {
    var obj = {};
    return function () {
        var args = [...arguments].reduce((accumulator, currentValue)=>(accumulator + currentValue));
        if (args in obj) {
            console.log('Результат из кеша');
            return obj[args];
        } else {
            var value = func.apply(this, arguments);
            obj[args] = value;
            console.log('Первое суммирование');
            return value;
        }
    }
}


var cachedFunction = cache(sumFunction);

console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction(5, 10));
console.log(cachedFunction(10, 5));
console.log(cachedFunction(10, 15));
