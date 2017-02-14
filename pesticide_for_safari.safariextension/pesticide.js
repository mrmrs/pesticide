var i = false;
safari.self.addEventListener("message", function(event) {
    var head = document.getElementsByTagName('head')[0];
    var pesticide = document.createElement('link');
    pesticide.type = "text/css";
    pesticide.rel = "stylesheet";
    pesticide.href = safari.extension.baseURI + 'pesticide.min.css';

    if (event.name == "toggle-pesticide" && i == true) {
        var headLinks = document.getElementsByTagName('link');
        for (var x = 0; x < headLinks.length; x++) {
            if (headLinks[x].href == pesticide.href) {
                head.removeChild(headLinks[x])
            }
        }
    } else if (event.name == "toggle-pesticide") {
        document.getElementsByTagName('head')[0].appendChild(pesticide);
    }
    i = !i;
}, false);