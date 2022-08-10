const caesar = function(string, shift) {
    let newString = '';
    for (let i=0; i<string.length; i++){
        if(string[i].match(/[a-z]/i)){
            let unicode = string[i].charCodeAt();
            //wrap Uppercase letters
            if (unicode <= 90){
                if ((unicode + shift) > 90){
                    let dif = (((unicode + shift) - 90)%26);
                    newString = newString + (String.fromCharCode(dif + 64));

                } else if ((unicode + shift) < 65){
                    let dif = ((65-(unicode + shift))%26);
                    newString = newString + (String.fromCharCode(91 - dif));

                } else {
                    newString = newString + (String.fromCharCode(unicode + shift));
                }

            } //wrap lowercase 
            else {
                if ((unicode + shift) > 122){
                    //wrap it here
                    let dif = (((unicode + shift) - 122)%26);
                    newString = newString + (String.fromCharCode(dif + 96));
                    
                } else if ((unicode + shift) < 97){
                    let dif = ((97-(unicode + shift))%27);
                    console.log(`letter ${string[i]} unicode: ${unicode} shift: ${shift} dif: ${dif}`)
                    newString = newString + (String.fromCharCode(123 - dif));

                }else {
                    newString = newString + (String.fromCharCode(unicode + shift));
                }
            }
            
        } else {
            newString = newString +string[i];
        }
    
    }

    return newString;

};


// Do not edit below this line
module.exports = caesar;
