var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20,
    height: 176
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25,
    height: 186
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18,
    height: 205
}];

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

var appList = document.getElementById('app-list');
users.sort(byField('height'));
users.forEach(function(user) {
    appList.innerHTML += "<h2>" + user.name + " - " + user.age + "</h2>";
});
