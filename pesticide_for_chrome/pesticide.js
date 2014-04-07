// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.insertCSS({file: 'pesticide.min.css'});
});
