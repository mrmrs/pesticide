// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
    
    chrome.tabs.executeScript({
        code: 'var pesticideLink; (document.getElementById("pesticide") == null) ? (pesticideLink = document.createElement("link"), pesticideLink.href = chrome.extension.getURL("/pesticide.min.css"), pesticideLink.id = "pesticide", pesticideLink.type = "text/css", pesticideLink.rel = "stylesheet",document.getElementsByTagName("head")[0].appendChild(pesticideLink)) : (document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticide")))'
    });
});