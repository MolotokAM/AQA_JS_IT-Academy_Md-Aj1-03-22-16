// // // Решить используя промисы и async/await

// // // 1. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// // // Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
const generatePromise = (number) => {
    let timeout = Math.round(Math.random() * 5) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number);
        }, timeout);
    });
};

let promiseOne = generatePromise(1);
let promiseTwo = generatePromise(2);
let promiseThree = generatePromise(3);

Promise.race([promiseOne, promiseTwo, promiseThree]).then((result) =>
    console.log(result)
);
Promise.any([promiseOne, promiseTwo, promiseThree]).then((result) =>
    console.log(result)
);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const prom1 = new Promise(function (resolve, reject) {
    let waitTime = getRandomInt(1, 6);
    setTimeout(() => {
        resolve(1);
    }, waitTime * 1000);
});

const prom2 = new Promise(function (resolve, reject) {
    let waitTime = getRandomInt(1, 6);
    setTimeout(() => {
        resolve(2);
    }, waitTime * 1000);
});

const prom3 = new Promise(function (resolve, reject) {
    let waitTime = getRandomInt(1, 6);
    setTimeout(() => {
        resolve(3);
    }, waitTime * 1000);
});

Promise.race([prom1, prom2, prom3]).then(function (value) {
    console.log(value);
});

async function fnAsync1() {
    let refund1 = await prom1;
    let refund2 = await prom2;
    let refund3 = await prom3;
    console.log(Promise.race([refund1, refund2, refund3]));
};

fnAsync1();

// // // 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// // // Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

function getNum() {
    return new Promise(function (resolve, reject) {
        let randomNum = getRandomInt(1, 6);
        setTimeout(() => {
            resolve(randomNum);
        }, 3000);
    });
};

async function fnAsync2() {
    let result = await getNum();
    console.log((Math.pow(result, 2)));
}

fnAsync2();


// // // 3. Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// // // Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// // // Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// };

function getNum1() {
    return new Promise(function (resolve, reject) {
        let randomNum = getRandomInt(1, 6);
        setTimeout(() => {
            resolve(randomNum);
        }, 3000);
    });
};

function getNum2() {
    return new Promise(function (resolve, reject) {
        let randomNum = getRandomInt(6, 11);
        setTimeout(() => {
            resolve(randomNum);
        }, 5000);
    });
};

async function fnAsync3() {
    let result1 = await getNum1();
    let result2 = await getNum2();
    console.log((result1 + result2));
};

fnAsync3();