(function(window, document){

  'use strict';

  chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({file: 'pesticide-toggle.js'});
  });

}(window, document));
