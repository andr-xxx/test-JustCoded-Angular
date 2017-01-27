app.service('mainBarService', function ($interval) {
    const that = this;
    let persons = [];
    let totalPersonsStatistics = {};

    that.addPerson = function (person) {
        persons.push(person);
        that.changeSuperHeroValues();
    };

    that.getPersons = function () {
        return persons;
    };

    that.totalPersonsStatistics = function () {
        return totalPersonsStatistics;
    };

    that.deletePerson = function (index) {
        persons.splice(index, 1);
        that.changeSuperHeroValues();
    };

    that.changeSuperHeroValues = function () {
        totalPersonsStatistics.superPower = 0;
        totalPersonsStatistics.rich = 0;
        totalPersonsStatistics.genious = 0;
        totalPersonsStatistics.total = persons.length;
        persons.forEach((item) => {
            for (let key in item) {
                if (key === 'name') continue;
                totalPersonsStatistics[key] += item[key]
            }
        });
    };
});