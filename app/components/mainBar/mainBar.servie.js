app.service('mainBarService', function () {
  that = this;
  let persons = [];
  let totalPersons = {};

  that.addPerson = function (person) {
    persons.push(person);
  };

  that.getPersons = function () {
    console.log (persons)
    return persons;
  };

  that.deletePerson = function (index) {
    persons.splice(index, 1);
  };

  that.changeSuperHeroValues = function () {
    totalPersons = {
      superPower: 0,
      rich: 0,
      genious: 0
    };
    totalPersons.total = persons.length;
    persons.forEach((item) => {
      for (let key in item) {
        totalPersons[key] += item[key]
      }
    });
  }
})