/*global define */

define(function() {

    /**
     * @param {String} first
     * @param {String} last
     * @param {Number} phone
     */
    function Person(first, last, phone) {
        this.first = first;
        this.last = last;
        this.phone = phone;
    }

    Person.prototype.fullName = function() {
        return this.first + " " + this.last;
    };

    var users = [
	    new Person("Andy", "Clement", 123),
	    new Person("Marting", "Lippert", 456),
	    new Person("Andrew", "Eisenberg", 789)
	];
  
    return { 
        /** 
         * @return {Number}
         */
        getUserCount: function() {
            return users.length;
        },
        /**
         * @param {Number} id
         * @return {Person}
         */
        getUser: function(id) {
            return users[id];
        }
    };
});