window._pesticide = { state: localStorage._pesticide == 'true' };

var update = function (show) {
    var pesticideLink = document.getElementById("pesticide") || null,
        head = document.getElementsByTagName("head")[0];

    if (show) {
        pesticideLink = document.createElement("link");
        pesticideLink.href = chrome.extension.getURL("/pesticide.min.css"); pesticideLink.id = "pesticide";
        pesticideLink.type = "text/css";
        pesticideLink.rel = "stylesheet";
        head.appendChild(pesticideLink);
    } else {
        if (pesticideLink)
            head.removeChild(document.getElementById("pesticide"));
    }
};

Object.observe(_pesticide, function (changes) {
    var newVal = changes[0].object.state;
    localStorage._pesticide = newVal;
    update(newVal);
});

update(window._pesticide.state);
