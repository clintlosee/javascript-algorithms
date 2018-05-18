function twoSum(numArr, sum) {
    var pairs = [];
    var hashtable = [];

    for (var i = 0; i < numArr.length; i++) {
        var currNum = numArr[i];
        var counterPart = sum - currNum;

        if (hashtable.indexOf(counterPart) !== -1) {
            pairs.push([ currNum, counterPart ]);
        }
        hashtable.push(currNum);
    }
    return pairs;
}

twoSum([1,6,4,5,3,3], 7); // result = [ [6,1], [3,4], [3,4] ]
twoSum([40,11,19,17,-12], 28); // result = [ [40,-12], [11,17] ]