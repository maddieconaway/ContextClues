document.addEventListener('DOMContentLoaded', function () {
    var friends = ['Josh', 'Lexi', 'Jillian', 'Cat', 'Madeline'];
    var locations = ['closet', 'kitchen', 'bedroom', 'bathroom', 'backyard', 'car', 'garbage can', 'glovebox', 'shoe rack', 'toilet'];
    var weapons = ['gun', 'hammer', 'chainsaw', 'axe', 'bazooka', 'trebuchet', 'monkey launcher', 'squidpistol', 'christmas wrap roll', 'fingernail clippers', 'spare tire', 'garden rake', 'shovel', 'potato peeler', 'wig of death', 'inflatable t-rex costume', 'skateboard', 'pickle fork', 'sword of half-truths', 'really small goat'];
    var d = document.createElement('div');

    for (var i = 1; i <= 100; i++) {
        var h = document.createElement('h3');
        h.textContent = 'Accusation ' + i;
        h.addEventListener('click', accusationStatement(i));
        d.appendChild(h);
        document.body.appendChild(d);
    }

    function accusationStatement(i) {
        return function() {
            alert('Accusation ' + i + ': I accuse ' + getFriend(i) + ' , with the ' + getWeapon(i) + ' in the ' + getLocation(i) + '!');
        }
    }

    function getFriend(i) {
        return friends[(i-1) % 5];
    }

    function getLocation(i) {
        return locations[(i-1) % 10];
    }

    function getWeapon(i) {
        return weapons[(i-1) % 20];
    }
});