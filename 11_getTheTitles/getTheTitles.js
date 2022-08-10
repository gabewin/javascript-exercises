const getTheTitles = function(array) {
    let titleArray = array.map(function (books) {return books.title;});
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
