const caesar = function(string, shift) {
    let stringArray = string.split("");
    const newStringArray = stringArray.map(x => String.fromCharCode(x.charCodeAt() + shift));
    let newString= newStringArray.join("");

    return newString;

};


// Do not edit below this line
module.exports = caesar;
