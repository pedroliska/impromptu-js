
personType = { employee: 'asdfsadf', normal: 'oiweruwer' };

Person = function(type, name) {
    this.answerPhone = function() {
        if (type === personType.employee) {
            return '1800contacts this is ' + name + ', how may I help you?';
        }
        return 'Sup, this is ' + name + ' what do you want?';
    }
}

