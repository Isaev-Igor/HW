//вариант_1

for (var i = 0; i < 10; i++) {
    (function(index) {
        setTimeout(function() {
            console.log(index);
        }, 10);
    }(i));
}



//вариант_2
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 10)
}

