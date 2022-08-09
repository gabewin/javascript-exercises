const removeFromArray = function(array, ...args) {
    let newArray = [];
    console.log(args);
    for (let i=array.length-1; i>=0; i--){
        for (let a=0; a<args.length; a++){
            console.log(`array[a] ${array[i]} args[i] ${args[a]}`)
            if (array[i] === args[a]){
                array.splice(i, 1);
                
            }

        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
