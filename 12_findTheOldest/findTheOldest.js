const findTheOldest = function(people) {
  const currentYear = parseInt(new Date().getFullYear());
  let age = Array();
  for (let i=0; i<people.length; i++){
    if (people[i].yearOfDeath === undefined){
      age.push(currentYear - people[i].yearOfBirth);
    } else {
      age.push(people[i].yearOfDeath - people[i].yearOfBirth);
    }
  }
  return people[age.indexOf(Math.max(...age))];
};

// Do not edit below this line
module.exports = findTheOldest;
