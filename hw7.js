// 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
function rollCube() {
    let cube = (Math.random() * 6) + 1;
    return Math.floor(cube);
};

function rollCubeFewTimes(n) {
    let FirstPlayerTotalSum = 0;
    let SecondPalyerTotalSum = 0;
    for (let i = 0; i < n; i++) {
        FirstPlayerTotalSum += rollCube();
        SecondPalyerTotalSum += rollCube();
    }
    return { FirstPlayerTotalSum, SecondPalyerTotalSum };
};

function playGame() {
    const { FirstPlayerTotalSum, SecondPalyerTotalSum } = rollCubeFewTimes(3);
    if (FirstPlayerTotalSum > SecondPalyerTotalSum) {
        console.log('Первый игрок выйграл.');
    } else if (FirstPlayerTotalSum < SecondPalyerTotalSum) {
        console.log('Второй игрок выйграл.');
    } else {
        console.log('Ничья!');
    }
};
playGame();

// // 2. Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )
let startDate = new Date('2000-01-01');
let currentDate = new Date();

function countingNumberFridays13() {
    let count = 0;
    for (let day = startDate; day <= currentDate; day.setDate(day.getDate() + 1)) {
        if (day.getDay() == 5 && day.getDate() == 13) {
            count++;
        }
    }
    return count;
};
console.log(countingNumberFridays13());


// // 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма трех чисел будет равна 15) (4,6,5)

// // а. числа изначальное число целое, числа разбивки - целые (4,6,5)
function splitIntoIntegers(number, numberOfPieces) {
    const resultArrayA = [];
    let sumOfPieces = 0;
    for (let i = 0; i < numberOfPieces; i++) {
        if (i === numberOfPieces - 1) {
            resultArrayA.push(number - sumOfPieces);
            break;
        }
        let piece = Math.round(Math.random() * (number - sumOfPieces));
        resultArrayA.push(piece);
        sumOfPieces += piece;
    }
    return resultArrayA;
};

// // б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
function splitIntoDecimals(number, numberOfPieces) {
    const resultArrayB = [];
    let sumOfPieces = 0;
    for (let i = 0; i < numberOfPieces; i++) {
        if (i == numberOfPieces - 1) {
            resultArrayB.push(+(number - sumOfPieces).toFixed(2));
            break;
        }
        let piece = +(Math.random() * (number - sumOfPieces)).toFixed(2);
        resultArrayB.push(piece);
        sumOfPieces += piece;
    }
    return resultArrayB;
};
console.log(splitIntoIntegers(15, 4));
console.log(splitIntoDecimals(15, 4));
