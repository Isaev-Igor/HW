let number;
let sumNumber;
let objTrainy = {};
let longNumber1;
let longNumber2;

let password = prompt("Введите пароль", "введите пароль");

if (validatePassword(password)) {
    number = +prompt("Введите число", "введите число");
    if (checkNumber(number)) {
        longNumber1 = prompt("Введите 1 число", "введите число");
        longNumber2 = prompt("Введите 2 число", "введите число");
    } else {
        alert("что то пошло не так");
    }
} else {
    alert("пароль не соответствует требованиям");

}


sumNumber = sumLongNumber(longNumber1, longNumber2);

alert(`Сумма указанных чисел равна ${sumNumber}`);

objTrainy.longNumber1 = longNumber1;
objTrainy.longNumber2 = longNumber2;
objTrainy.sumNumber = sumNumber;

console.log(objTrainy);


function sumLongNumber(longNumber1, longNumber2) {
    let numberLength;
    let sumNumber = '';
    let currentNumber = '';
    let nextPosition = 0;
    let twoNumbers;

    if (longNumber1.length > longNumber2.length) {
        numberLength = longNumber1.length - longNumber2.length;
        for (let i = 0; i < numberLength; i++) {
            longNumber2 = '0' + longNumber2;
        }
    } else {
        numberLength = longNumber2.length - longNumber1.length;
        for (let i = 0; i < numberLength; i++) {
            longNumber1 = '0' + longNumber1;
        }
    }


    for (let i = longNumber1.length - 1; i >= 0; i--) {
        if ((longNumber1[i] * 1) + (longNumber2[i] * 1) + nextPosition < 10) {
            sumNumber = (longNumber1[i] * 1) + (longNumber2[i] * 1) + nextPosition + sumNumber;
            nextPosition = 0;
        } else {
            twoNumbers = (longNumber1[i] * 1) + (longNumber2[i] * 1) + nextPosition;
            currentNumber = (String(twoNumbers).slice(1, 2));
            sumNumber = currentNumber + sumNumber;
            nextPosition = 1;
        }
    }


    if (nextPosition) {
        sumNumber = '1' + sumNumber;
    }
    return sumNumber;
}


function checkNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            if (num % 2 === 0) {
                return true;
            } else {
                return false
            }
        }
    }
    return true;
}

function validatePassword(password) {
    let lengthPassword;
    let checkConditions;
    let isNumber;
    let isCharacter;
    let isSymbol;

    lengthPassword = (6 < password.length && password.length < 20) ? true : false;

    for (let i = 0; i < password.length; i++) {

        if (!isNaN(password[i])) {
            isNumber = true;
            break;
        } else {
            isNumber = false;
        }
    }

    for (let i = 0; i < password.length; i++) {

        if (password[i].toLowerCase() !== password[i].toUpperCase()) {
            isCharacter = true;
            break;
        } else {
            isCharacter = false;
        }
    }

    for (let i = 0; i < password.length; i++) {

        if (isNaN(password[i]) && (password[i].toLowerCase() === password[i].toUpperCase())) {
            isSymbol = false;
            break;
        } else {
            isSymbol = true;
        }
    }

    checkConditions = (lengthPassword && isCharacter && isNumber && isSymbol) ? true : false;

    return checkConditions;
}
