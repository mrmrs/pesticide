chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleAssets
  });
});

function toggleAssets() {
  // Inject the pesticide CSS and JS or remove them if already present

  if (document.getElementById("pesticideCSS") && document.getElementById("pesticideJS")) {
    // If they exist, remove them
    document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideCSS"));
    document.getElementsByTagName("head")[0].removeChild(document.getElementById("pesticideJS"));
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("pesticide-for-chrome-result"));
  } else {
    // If they don't exist, inject them
    const pesticideCSS = document.createElement("link");
    pesticideCSS.rel = "stylesheet";
    pesticideCSS.type = "text/css";
    pesticideCSS.href = chrome.runtime.getURL("/pesticide.min.css");
    pesticideCSS.id = "pesticideCSS";
    document.getElementsByTagName("head")[0].appendChild(pesticideCSS);

    const pesticideJS = document.createElement("script");
    pesticideJS.type = "text/javascript";
    pesticideJS.src = chrome.runtime.getURL("/pesticide.js");
    pesticideJS.id = "pesticideJS";
    document.getElementsByTagName("head")[0].appendChild(pesticideJS);

    const pesticideResult = document.createElement("div");
    pesticideResult.id = "pesticide-for-chrome-result";
    document.getElementsByTagName("body")[0].appendChild(pesticideResult);
  }
}
