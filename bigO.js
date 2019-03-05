//BIG 0

// Even or odd
function isEven(value) {
    let ticks = 0,
        result = false;
    if (value % 2 == 0) {
        ticks++;
        result = true;
    } else {
        ticks++;
        result = false;
    }
    return {
        result: result,
        ticks: ticks
    };
}

function getRunTimeOperations1(fn, input) {
    const {
        ticks,
        result
    } = fn(input);
    console.log(
        `EVEN or ODD ` +
        `With input of size of ${input}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}. ` +
        `RESULT: Constant time O(1)`);
}

getRunTimeOperations1(isEven, 10);
getRunTimeOperations1(isEven, 111);
getRunTimeOperations1(isEven, 120987);

// Are you here?
function areYouHere(arr1, arr2) {
    let ticks = 0,
        result = false;
    for (let i = 0; i < arr1.length; i++) {
        ticks++;
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            ticks++;
            const el2 = arr2[j];
            if (el1 === el2) {
                result = true;
            }
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

function getRunTimeOperations2(fn, input1, input2) {
    const {
        ticks,
        result
    } = fn(input1, input2);
    console.log(
        `ARE YOU HERE ` +
        `With input of size ${input1.length} and ${input2.length}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}. ` +
        `RESULT: Polynomial time O(n^2)`);
}

getRunTimeOperations2(areYouHere, [1, 2, 3], [4, 2, 6]);
getRunTimeOperations2(areYouHere, [1, 2, 3, 5], [4, 8, 6, 9]);
getRunTimeOperations2(areYouHere, [1, 2, 3, 4, 7, 7], [4, 2, 6, 1, 4, 6]);


// Doubler
function doubleArrayValues(array) {
    let ticks = 0
    for (let i = 0; i < array.length; i++) {
        ticks++;
        array[i] *= 2;
    }
    return {
        ticks: ticks
    };

}

function getRunTimeOperations3(fn, input) {
    const {
        ticks
    } = fn(input);
    console.log(
        `DOUBLER ` +
        `With input of size ${input.length}, ${fn.name} ` +
        `clocked ${ticks} ticks. ` +
        `RESULT: Linear time O(n)`);
}

getRunTimeOperations3(doubleArrayValues, [1, 2, 3]);
getRunTimeOperations3(doubleArrayValues, [1, 2, 3, 4, 5, 6]);
getRunTimeOperations3(doubleArrayValues, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// Naive Search
function naiveSearch(array, item) {
    let ticks = 0,
        result = false;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        if (array[i] === item) {
            ticks++;
            result = true;
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

function getRunTimeOperations4(fn, input, item) {
    const {
        ticks,
        result
    } = fn(input, item);
    console.log(
        `NAIVE SEARCH ` +
        `With input of size ${input.length} and item ${item.length}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}. ` +
        `RESULT: Linear time O(n)`);
}

getRunTimeOperations4(naiveSearch, [1, 2, 3], 3);
getRunTimeOperations4(naiveSearch, [1, 2, 3, 4, 5, 6], 10);
getRunTimeOperations4(naiveSearch, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11);

// Creating pairs:
function createPairs(arr) {
    let ticks = 0;
    for (let i = 0; i < arr.length; i++) {
        ticks++;
        for (let j = i + 1; j < arr.length; j++) {
            ticks++;
        }
    }
    return {
        ticks: ticks
    }
}

function getRunTimeOperations6(fn, input) {
    const {
        ticks
    } = fn(input);
    console.log(
        `CREATE PAIRS ` +
        `With input of size ${input.length} and ${fn.name} ` +
        `clocked ${ticks} ticks. ` +
        `RESULT: TBD`);
}

function getRunTimeOperations6(fn, input) {
    const {
        ticks
    } = fn(input);
    console.log(
        `CREATE PAIRS ` +
        `With input of size ${input.length}, ${fn.name} ` +
        `clocked ${ticks} ticks. ` +
        `RESULT: Polynomial time O(n^2)`);
}

getRunTimeOperations6(createPairs, [1, 2, 3]);
getRunTimeOperations6(createPairs, [1, 2, 3, 4, 5, 6]);
getRunTimeOperations6(createPairs, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// fib
function generateFib(num) {
    let result = [];
    let ticks = 0;
    for (let i = 1; i <= num; i++) {
        ticks++;
        if (i === 1) {
            ticks++;
            result.push(0);
        } else if (i == 2) {
            ticks++;
            result.push(1);
        } else {
            ticks++;
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

function getRunTimeOperations5(fn, input) {
    const {
        ticks,
        result
    } = fn(input);
    console.log(
        `FIB ` +
        `With input of size ${input} and ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}. ` +
        `RESULT: Linear time O(n)`);
}

getRunTimeOperations5(generateFib, 2);
getRunTimeOperations5(generateFib, 4);
getRunTimeOperations5(generateFib, 8);

// Efficient Search
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    let ticks = 0

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            ticks++;
            minIndex = currentIndex + 1;
        } else if (currentElement > item) {
            ticks++;
            maxIndex = currentIndex - 1;
        } else {
            ticks++;
            return {
                ticks: ticks,
                result: currentIndex
            }
        }
    }
    return {
        ticks: ticks,
        result: -1
    }
}

function getRunTimeOperations7(fn, input, item) {
    const {
        ticks,
        result
    } = fn(input, item);
    console.log(
        `EFFICIENT SEARCH ` +
        `With input of size ${input.length} and item ${item}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}. ` +
        `RESULT: Logarithmic time O(log(n))`);
}

getRunTimeOperations7(efficientSearch, [1, 2, 3], 3);
getRunTimeOperations7(efficientSearch, [1, 2, 3, 4, 5, 6], 6);


// Random Element
function findRandomElement(arr) {
    let ticks = 0
    ticks++
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(`FIND RANDOM ELEMENT is a Constant time O(1)`)


// Is Prime
function isPrime(n) {
    let ticks = 0,
        result = false;
    if (n < 2 || n % 1 != 0) {
        ticks++
        return {
            result: result,
            ticks: ticks
        };
    }
    for (let i = 2; i < n; ++i) {
        ticks++
        if (n % i == 0) {
            ticks++
            return {
                result: result,
                ticks: ticks
            };
        }
    }
    result = true;
    return {
        result: result,
        ticks: ticks
    };
}

function getRunTimeOperations8(fn, input) {
    const {
        ticks,
        result
    } = fn(input);
    console.log(
        `IS PRIME ` +
        `With input of size ${input}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}. ` +
        `RESULT: Linear time O(n)`);
}

getRunTimeOperations8(isPrime, 3);
getRunTimeOperations8(isPrime, 13);
getRunTimeOperations8(isPrime, 42);