const findTheOldest = function(people) {
    let total =0;
    let OldestPerson = {};
    let today = new Date();

    for (let i = 0; i<people.length; i++){
        if(!('yearOfDeath' in people[i])){
            people[i].yearOfDeath = today.getFullYear();
            console.log(people[i]);
        }
    }

    people.reduce((prev, curr) => {
        //console.log(curr.name);
        console.log(prev.name);
        if ((prev.yearOfDeath - prev.yearOfBirth)> total){
            total = (prev.yearOfDeath - prev.yearOfBirth);
            OldestPerson = prev;
        }
        if((curr.yearOfDeath - curr.yearOfBirth)> total){
            total = (curr.yearOfDeath - curr.yearOfBirth);
            OldestPerson = curr;
        }
        return prev;
    })
    return OldestPerson;
 
};

// Do not edit below this line
module.exports = findTheOldest;
