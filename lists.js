
// Task 1:
function squareNums(n) {
    const startTime = performance.now();
    let squares = [];
    for (let num = 1; num <= n; num++) {
        squares.push(num**2);
    };
    console.log(`Squared Numbers List: ${squares}`);
    const endTime = performance.now();
    const squareTime = (endTime - startTime) / 1000;
    console.log(`Squared numbers list created in ${squareTime.toFixed(7)} seconds.`);
};

squareNums(10);

// Task 2:
function subarrayReversal(arr, i, j) {
    const startTime = performance.now();
    const subArr = arr.slice(i, j+1);
    console.log(`Reversed Sub-Array: ${subArr.reverse()}`);
    const endTime = performance.now();
    const reversalTime = (endTime - startTime) / 1000;
    console.log(`Sub-Array reversal completed in ${reversalTime.toFixed(7)} seconds.`);
};

subarrayReversal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 2, 7);


// Task 3:
function mergeSort(arr1, arr2) {
    const startTime = performance.now();
    let newArr = arr1.concat(arr2);
    newArr.sort();
    console.log(`New Sorted Array: ${newArr}`);
    const endTime = performance.now();
    const mergeSortTime = (endTime - startTime) / 1000;
    console.log(`Merging and Sorting completed in ${mergeSortTime.toFixed(7)} seconds.`);
};

arr1 = [1, 3, 5, 7, 9];
arr2 = [0, 2, 4, 6, 8];
mergeSort(arr1, arr2);