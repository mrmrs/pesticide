function init() {
  var resultBanner = document.getElementById('pesticide-for-chrome-result');

  resultBanner.innerHTML = '<p>Ready to kill some bugs!</p>';
}

// updates the info banner at the bottom of the page
function updateBanner(event) {
  var resultBanner = document.getElementById('pesticide-for-chrome-result');
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

init();
document.addEventListener('mouseover', updateBanner, false);
