const reverseString = function(word) {
    let reverseWord = '';

    for (let i=0; i<word.length; i++){
        reverseWord = word[i]+reverseWord;
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
