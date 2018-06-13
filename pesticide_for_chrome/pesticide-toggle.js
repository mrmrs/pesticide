if (document.getElementById("pesticideCSS") && document.getElementById("pesticideJS")) {
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideCSS"));
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideJS"));
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("pesticide-for-chrome-result"));
} else {
  pesticideCSS = document.createElement("link");
  pesticideCSS.rel = "stylesheet";
  pesticideCSS.type = "text/css";
  pesticideCSS.href = chrome.extension.getURL("/pesticide.min.css");
  pesticideCSS.id = "pesticideCSS";
  document.getElementsByTagName("head")[0].appendChild(pesticideCSS);
  pesticideJS = document.createElement("script");
  pesticideJS.type = "text/javascript";
  pesticideJS.src = chrome.extension.getURL("/pesticide.js");
  pesticideJS.id = "pesticideJS";
  document.getElementsByTagName("head")[0].appendChild(pesticideJS);
  pesticideResult = document.createElement("div"),
  pesticideResult.id = "pesticide-for-chrome-result",
  document.getElementsByTagName("body")[0].appendChild(pesticideResult)
}
