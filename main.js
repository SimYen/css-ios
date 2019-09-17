function drainBatt(from, to) {
    let x = from;
    let timerId = setInterval(function() {
        var battElement = document.getElementById('fullBar');
        if (x > 0) {
            var battWidth = x + "px";
            battElement.style.width = battWidth;
        }
        x--;
    }, 1000);
}

function createContent() {
    for (var i = 1; i < 21; i++) {
        var iconElement = document.createElement('img');
        iconElement.setAttribute('class', "icon " + i);
        iconElement.setAttribute('src', "Icons/" + i + ".png");
        document.getElementById('applications').appendChild(iconElement);
    }
}

drainBatt(21, 0);
createContent();