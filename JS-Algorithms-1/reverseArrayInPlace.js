function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        // arr[0] = arr[3]  == [4,2,3,4]
        // arr[1] = arr[2] == [4,3,3,1]
        arr[arr.length - 1 - i] = tempVar;
        // arr[3] = arr[0] === [4,2,3,1]
        // arr[2] = arr[1] === [4,3,2,1]
    }
    return arr;
}

reverseArrayInPlace([1, 2, 3, 4]);
