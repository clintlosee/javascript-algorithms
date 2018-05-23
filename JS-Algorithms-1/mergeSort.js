function mergeSort(array) {
    // take in single, unsorted array
    // split array into two halves
    if (array.length < 2) return array;

    var middleIndex = Math.floor(array.length / 2);
    var firstHalf = array.slice(0, middleIndex);
    var secondHalf = array.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
    // take in two sorted arrays
    // merges those two arrays into one sorted array
    // returns one sorted array
    var result = [];
    while (array1.length && array2.length) {
        var minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

    if (array1.length) result = result.concat(array1);
    else result = result.concat(array2);

    return result;
}

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);
mergeSort([100, -20, 40, -30, 16, -100, -101]);
