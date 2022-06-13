// // // 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
const array = [1, 2, 3, 4, 5, 6];
const newArray = reverseArray(array);
console.log(`Перевернутый массив: ${newArray} `);

function reverseArray(array) {
    return array.reverse();
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.reverse());

// // // 2. найти максимальное значение числа в массиве ([3,67,15...])
const array2 = [3, 67, 15, 16, 11, 4, 89, 17, 2, 28, 3, 77, 46];
const maxValue = maxArrayValue(array2);
console.log(`Максимальное значение: ${maxValue} `);

function maxArrayValue(array) {
    let maxValue = array2[0];
    for (i = 0; i < array2.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array2[i];
        };
    };
    return maxValue;
};

// // // 3. записать в массив ряд фибаначи начиная с N члена с длинной массива M
const initialNumber = 2;
const arrLength = 9;
const array3 = [];
createArray(array3, initialNumber, arrLength);
console.log(array3);

function numbersFibonacci(n) {
    return n <= 1 ? n : numbersFibonacci(n - 1) + numbersFibonacci(n - 2);
};

function createArray(array3, initialNumber, arrLength) {
    let nextNumberValue = numbersFibonacci(initialNumber);
    for (i = 0; i < arrLength; i++) {
        array3.push(nextNumberValue);
        nextNumberValue = numbersFibonacci(initialNumber + 1);
        initialNumber++;
    };
};

// // // 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
const firstNumber = 3487;
const secondNumber = 3790;

const valueMatchesAmount = checkValue(firstNumber, secondNumber);
console.log(`Совпадают по значению: ${valueMatchesAmount} `);

const valueAndPositionMatchesAmount = checkValueAndPosition(firstNumber, secondNumber);
console.log(`Совпадают по значению и позиции: ${valueAndPositionMatchesAmount} `);

function checkValue(firstNumber, secondNumber) {
    let arrayForFirstNum = String(firstNumber).split('');
    let arrayForSecondNum = String(secondNumber).split('');
    let amount = 0;
    for (i = 0; i < arrayForFirstNum.length; i++) {
        for (j = 0; j < arrayForSecondNum.length; j++) {
            if (arrayForFirstNum[i] === arrayForSecondNum[j]) {
                amount++;
            };
        };
    };
    return amount;
};

function checkValueAndPosition(firstNumber, secondNumber) {
    let arrayForFirstNum = String(firstNumber).split('');
    let arrayForSecondNum = String(secondNumber).split('');
    let amount = 0;
    for (i = 0; i < arrayForFirstNum.length; i++) {
        if (arrayForFirstNum[i] === arrayForSecondNum[i]) {
            amount++;
        };
    };
    return amount;
};

// // // 5. сортировка массива по возрастанию/убыванию
const array5 = [11, 41, 37, 22, 88, 3, 100];
const ascSortedArray = sortAsc(array5);
console.log(`Массив, отсортированный в порядке возрастания: ${ascSortedArray} `);
const descSortedArray = sortDesc(array5);
console.log(`Массив, отсортированный в порядке убывания: ${descSortedArray} `);

// // // Сортировка по возрастанию
function sortAsc(array5) {
    return array5.sort(function (a, b) {
        return a - b;
    });
};

// // // Сортировка по убыванию
function sortDesc(array5) {
    return array5.sort(function (a, b) {
        return b - a;
    });
};

// // // 6. удалить из массива все повторяющиеся элементы
// // //* все действия и переборы стараться выполнять методами конструктора Array и Object, для каждой задачи должна быть написана функция, которая будет универсальной.

//const array6 = ['artur', 'olga', 'victoria', 'sofia', 'lycia', 'artur', 'victoria'];
const array6 = [1, 42, 5, 15, 15, 88, 7, 1, 15, 13, 7, 15, 8, 3, 15, 88, 88, 7, 13];
console.log(`Исходный массив: ${array6} `);
removeRepetitions(array6);
console.log(`Массив, из которого удалены повторяющиеся элементы: ${array6} `);

function removeRepetitions(array6) {
    for (let i = 0; i < array6.length; i++) {
        for (let j = i + 1; j < array6.length; j++) {
            if (array6[i] === array6[j]) {
                array6.splice(j, 1);
                j--;
            };
        };
    };
};