(function(window, document){

  'use strict';

  // inject the pesticide CSS and JS
  function toggleAssets(tab) {
    var injector = '';

    // logic test if the injected assets exists
    injector += 'if (document.getElementById("pesticideCSS") && document.getElementById("pesticideJS") ) {';

    //if they exist, remove them
    injector += 'document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideCSS"));';
    injector += 'document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideJS"));';
    injector += 'document.getElementsByTagName("body")[0].removeChild(document.getElementById("pesticide-for-chrome-result"));';

    //if they don't exist, inject them
    injector += '} else {';

    injector += 'pesticideCSS = document.createElement("link");';
    injector += 'pesticideCSS.rel = "stylesheet";';
    injector += 'pesticideCSS.type = "text/css";';
    injector += 'pesticideCSS.href = chrome.extension.getURL("/pesticide.min.css");';
    injector += 'pesticideCSS.id = "pesticideCSS";';
    injector += 'document.getElementsByTagName("head")[0].appendChild(pesticideCSS);';
    injector += 'pesticideJS = document.createElement("script");';
    injector += 'pesticideJS.type = "text/javascript";';
    injector += 'pesticideJS.src = chrome.extension.getURL("/pesticide.js");';
    injector += 'pesticideJS.id = "pesticideJS";';
    injector += 'document.getElementsByTagName("head")[0].appendChild(pesticideJS);';
    injector += 'pesticideResult = document.createElement("div"),';
    injector += 'pesticideResult.id = "pesticide-for-chrome-result",';
    injector += 'document.getElementsByTagName("body")[0].appendChild(pesticideResult)';

    //close logic test
    injector += '}';

    chrome.tabs.executeScript({code: injector});
  }

  chrome.browserAction.onClicked.addListener(function(tab){
    toggleAssets(tab);
  });

}(window, document));
