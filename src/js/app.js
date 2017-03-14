var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

var appList = document.getElementById('app-list');
users.sort(byField('age'));
users.forEach(function(user) {
    appList.innerHTML += "<h2>" + user.name + " - " + user.age + "</h2>";
});
