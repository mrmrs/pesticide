/**
 * Bookmarklet version of Pesticide.
 * To create the bookmarklet link, simply run `gulp minify-js` and paste the output
 * prefixed to `javascript:` to a link tag.
 *
 * @param {Object} context Execution context.
 */
(function(context) {

  // Create the namespace if it's not created yet.
  if(!context.PESTICIDE) context.PESTICIDE = {isDebugging: false};

  // Color table (tag name and hexadecimal value).
  var COLOR_TABLE = {
%s
      },
      // All body elements.
      all = document.body.getElementsByTagName('*'),
      count = 0,
      item,
      itemBorderColor,
      isDebugging = context.PESTICIDE.isDebugging;

  for(; count < all.length; ++count) {
    item = all[count];
    // Color fallback is 'red'.
    itemBorderColor = COLOR_TABLE[item.tagName.toLowerCase()] || 'red';
    // Apply the outline color to the element. If it's not in debug mode, it'll apply a transparent outline.
    item.style.outline = '1px solid ' + (!isDebugging ? itemBorderColor : 'transparent');
  }

  // Toggle debugging flag.
  context.PESTICIDE.isDebugging = !isDebugging;

})(window);
