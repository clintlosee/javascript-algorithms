// Palindrome is any word or phrase spelled the
// same forwards or backwards, ex race car

function isPalindrome(str) {
    str = str.toLowerCase();
    var charArr = str.split('');
    var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charArr.forEach(char => {
        if (validChars.indexOf(char) > -1)
            lettersArr.push(char);
    });

    if (lettersArr.join('') === lettersArr.reverse().join(''))
        return true;
    else
        return false;
}

isPalindrome("Madam I'm adam");
