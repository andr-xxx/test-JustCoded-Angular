app.factory('Person', function () {
    function Person() {
        this.rich = false;
        this.genius = false;
        this.superPower = false;
        this.name = '';
    }

    Person.prototype = {
        validate (person) {
            console.log (person);
            if (!person || (!person && !person.name)) {
                return undefined;
            }
            return true
        },

        setData (person) {
            if (this.validate(person)) {
                this.name = person.name;
                this.rich = person.rich;
                this.superPower = person.superPower;
                this.genius = person.genius;
            };
            return this
        }
    };

    return Person;
});