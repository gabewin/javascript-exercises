const palindromes = function (word) {
    word = word.toLowerCase();
    reverseWord = "";
    newWord = "";
    for (let i=0; i<word.length; i++){
        if (word[i].match(/[a-z]/i)){
            reverseWord = word[i]+reverseWord;
            newWord = newWord + word[i];
        }
    }
    return reverseWord == newWord;
};

// Do not edit below this line
module.exports = palindromes;
