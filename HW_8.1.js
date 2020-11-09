const a = {
    espresso: 150,
    milk: 4150,
    cream: 150,
    sugar: 20,
    potato: 50,
    water: 150,
    tomato: 50,
    bananas: 10
};

const b = {
    espresso: 50,
    milk: 150,
    cream: 50,
    sugar: 10
};

function areEqualShallow(a, b) {
    for(var key in a) {
        if(!(key in b) || a[key] === b[key]) {
            return false;
        }
    }
    for(var key in b) {
        if(!(key in a) || a[key] === b[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqualShallow())


