function toggleAssets(doc) {
  if (doc.getElementById("pesticideCSS") && doc.getElementById("pesticideJS")) {
    doc.getElementsByTagName("head")[0].removeChild(doc.getElementById("pesticideCSS"));
    doc.getElementsByTagName("head")[0].removeChild(doc.getElementById("pesticideJS"));
    doc.getElementsByTagName("body")[0].removeChild(doc.getElementById("pesticide-for-chrome-result"));
  } else {
    pesticideCSS = doc.createElement("link");
    pesticideCSS.rel = "stylesheet";
    pesticideCSS.type = "text/css";
    pesticideCSS.href = chrome.extension.getURL("/pesticide.min.css");
    pesticideCSS.id = "pesticideCSS";
    doc.getElementsByTagName("head")[0].appendChild(pesticideCSS);
    pesticideJS = doc.createElement("script");
    pesticideJS.type = "text/javascript";
    pesticideJS.src = chrome.extension.getURL("/pesticide.js");
    pesticideJS.id = "pesticideJS";
    doc.getElementsByTagName("head")[0].appendChild(pesticideJS);
    pesticideResult = doc.createElement("div"),
    pesticideResult.id = "pesticide-for-chrome-result",
    doc.getElementsByTagName("body")[0].appendChild(pesticideResult)
  }
}

toggleAssets(document)
Array.from(document.getElementsByTagName('iframe'))
    .map(frame => frame.contentDocument)
    .filter(doc => doc) // contentDocument will be null for cross-origin frames
    .map(toggleAssets)
