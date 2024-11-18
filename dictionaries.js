
// Task 1:
function mergeDicts(dict1, dict2) {
    const startTime = performance.now();
    const newDict = { ...dict1 };

    for (let key in dict2) {
        if (newDict.hasOwnProperty(key)) {
            newDict[key] = [newDict[key], dict2[key]];
        } else {
            newDict[key] = dict2[key];
        }
    }

    console.log('New Dictionary:', JSON.stringify(newDict, null, 2));
    const endTime = performance.now();
    const mergeTime = (endTime - startTime) / 1000;
    console.log(`Merge of dictionaries completed in ${mergeTime.toFixed(7)} seconds.`);
};

let dict1 = {1: 'one', 2: 'two', 3: 'three'};
let dict2 = {3: 'second-three', 4: 'four', 5: 'five'};
mergeDicts(dict1, dict2)


// Task 2:
function dictIntersection(dict1, dict2) {
    const startTime = performance.now();

    const entries1 = Object.entries(dict1);
    const entries2 = Object.entries(dict2);

    const intersection = entries1.filter(([key, value]) =>
        entries2.some(([key2, value2]) => key === key2 && value === value2)
    );

    const intersectDict = Object.fromEntries(intersection);

    console.log("Intersection of Dictionaries:", intersectDict);

    const endTime = performance.now();
    const intersectTime = (endTime - startTime) / 1000;
    console.log(`Intersection completed in ${intersectTime.toFixed(7)} seconds.`);
}

let dict3 = {1: 'one', 2: 'two', 3: 'three'};
let dict4 = {3: 'three', 4: 'four', 5: 'five'};

dictIntersection(dict3, dict4);


// Task 3:
function countWordFrequency(wordList) {
    const startTime = performance.now();
    
    const wordCount = {};

    for (let word of wordList) {
        if (wordCount[word]) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }

    const endTime = performance.now();
    const executionTime = (endTime - startTime) / 1000;

    console.log("Word Frequency:", wordCount);
    console.log(`Time taken: ${executionTime.toFixed(7)} seconds.`);
    
    return wordCount;
}

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
countWordFrequency(words);
