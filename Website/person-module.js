
personType = { employee: 'asdfsadf', normal: 'oiweruwer' };

Person = function(type, name) {

    var privateVar = 'yeah';

    var privateFn = function(parameters) {

    };

    //constructor code can go here
    var greeting = type === personType.employee
        ? '1800contacts this is ' + name + ', how may I help you?'
        : 'Sup, this is ' + name + ' what dooo you want?';


    this.answerPhone = function() {
        return greeting;
    }

}

