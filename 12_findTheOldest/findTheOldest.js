const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    return getAge(oldest) > getAge(person) ? oldest : person;
  });
};

const getAge = function(person){
  if (person.yearOfDeath === undefined) {
    const currentYear = parseInt(new Date().getFullYear());
    return currentYear - person.yearOfBirth;
  } else {
    return person.yearOfDeath - person.yearOfBirth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
