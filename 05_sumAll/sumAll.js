const sumAll = function(number1, number2) {
    if ((number1 < 0 ) 
    || (number2 <0)){
        return 'ERROR';
    }
    else if ((typeof(number1)!='number')
    || (typeof(number2)!='number'))
    {
        return 'ERROR';
    }

    else {
        let result=0;
        let start;
        let end;
        if (number1 < number2){
            start = number1;
            end = number2;
        } else {
            start=number2;
            end=number1;
        }

        for (let i=start; i<=end; i++){
            result+=i;
        }

        return result;
    }
}

// Do not edit below this line
module.exports = sumAll;
