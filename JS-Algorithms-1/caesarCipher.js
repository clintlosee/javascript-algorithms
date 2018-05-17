function caesarCipher(str, num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for (var i = 0; i < lowerCaseString.length; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) {
            newIndex = newIndex - 26;
        }
        if (newIndex < 0) {
            newIndex = 26 + newIndex;
        }
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        } else {
            newStr += alphabet[newIndex];
        }
    }

    return newStr;
}

caesarCipher('zoo Keeper', 2); // bqq mggrgt
caesarCipher('Big Car', -16); // Lsq Mkb
caesarCipher('JavaScript', -900); // TkfkCmbszd
