const leapYears = function(year) {
    let divBy4 = (year%4 == 0);
    let divBy100 = (year%100 == 0);
    let divBy400 = (year%400 ==0);
    
    if (divBy4){
        if (divBy100){
            if (divBy400){
                return true;
            }else{
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
