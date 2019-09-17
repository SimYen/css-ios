function drainBatt() {
    var drain = setInterval(battery, 3000)
    function battery() {
        for (var x = 20; x > 0; x--) {
            var battElement = document.getElementById('fullBar');
            battElement.style.width = x + "px";
        }
    }
}

function createContent() {
    for (var i = 1; i < 21; i++) {
        var iconElement = document.createElement('img');
        iconElement.setAttribute('class', "icon " + i);
        iconElement.setAttribute('src', "Icons/" + i + ".png");
        document.getElementById('applications').appendChild(iconElement);
    }
}

drainBatt();
createContent();