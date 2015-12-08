var resultBanner = document.getElementById('pesticide-for-chrome-result');
function init() {
  resultBanner.innerHTML = '<p>Ready to kill some bugs!</p>';
}

// updates the info banner at the bottom of the page
function updateBanner(event) {
  var id = event.target.id.toString() || '';
  var classList = event.target.classList.toString() || '';
  var node = event.target.nodeName.toLowerCase() || '';

  if (!!!resultBanner)
    return false;

  // combine the node name, classes, and id into a string in the banner
  var resultContent = '<p>You\'re hovering on = { ';
  resultContent += 'node: <b> ' + node + '</b>; ';
  resultContent += 'classes: <b> ' + classList + '</b>; ';
  resultContent += 'id: <b> ' + id + '</b>;';
  resultContent +=  ' }</p>';

  resultBanner.innerHTML = resultContent;
}

// toggles the visibility of the banner
function showBanner(event) {
  resultBanner.className = '';
  if (event.ctrlKey)
    resultBanner.className = 'show';
}

init();
document.addEventListener('mouseover', updateBanner, false);
window.addEventListener('keydown', showBanner, false);
window.addEventListener('keyup', showBanner, false);
