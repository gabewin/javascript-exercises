const repeatString = function(word,repeat) {
    let response = '';
    if (repeat<0){
        return "ERROR";
    }
    for (let i=0; i<repeat; i++){
        response+=word;
    }
    return response;
};

// Do not edit below this line
module.exports = repeatString;
