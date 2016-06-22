# Pesticide

Kill your CSS layout bugs.  *Without* 2000 clicks in Chrome Dev Tools.

## WTF is this?

Sometimes if I am trying to sleuth a layout problem in CSS, all I want is every
single element on the page to show me where its outline is.  And I want all the
outline colors to be different per element because, well sometimes I need to
tell stuff apart. The pesticide toggle has proved much faster for me than
clicking around in browser dev tools when trying to uncover what CSS is
causing me problems.


![Pesticide demo](http://mrmrs.io/pesticide/img/demo2.gif "Pesticide")

# Getting started

If you like pre-processing your CSS like I do, you can drop any of the Sass,
Less, or Stylus partials into your includes.  Each version of Pesticide sets a
pair of debug variables at the top of the partial, which you can set to false if
you want to turn off outlines and depths (i.e., shadows) respectively:

```sass
// sass
$pesticide-debug-outline: false;
$pesticide-debug-depth: false;
```

```less
// less
@pesticide-debug-outline: false;
@pesticide-debug-depth: false;
````

```stylus
// stylus
pesticide-debug-outline = false
@pesticide-debug-depth = false
````

If you like to use vanilla CSS, you can either keep it commented out at the
bottom of your CSS file, or include it as an extra request in the head of your
HTML file like so...

```html
<link rel="stylesheet" href="pesticide.css">
```

Make sure not to send it to production though because that wouldn't be the best.

*Enjoy. And feel free to make the color scheme prettier and send a pull request :)*

# Development

If you want to tweak the source code you might find it useful to use some of
the available gulp tasks included with the project. To set up automation with
gulp just press the following keys:
```shell
cd pesticide
npm install -g gulp
npm install
```
Because Pesticide comes in Sass, Less, and Stylus flavors, you can adjust gulp to run with your pre-processor of choice. To do so, simply change the `preProcessor` variable at the top of the gulpfile to either sass, less or stylus as a string value. For example:

```js
preProcessor = 'sass';
```

Then run `npm start`.
That will set up:

* Browser-sync (livereload changes in the browser)
* Stylesheet compilation
* CSSLint
* CSS minification

*It's important to note that Sass is the default pre-processor set in the gulpfile, so if you plan to use Less or Stylus, you should change the `preProcessor` value before running `gulp`.*

# Generating the color table

The default color table is automatically generated and exported for the different pre-processors we support.
To generate the color table simply run:

```
gulp generate
```

If you want to generate your own custom color table:

```
COLOR_TABLE=path/to/custom/table.json gulp generate
```

# Chrome Extension

The source for the Pesticide Chrome extension is included beginning from v0.2. The extension is [available in the Chrome Web Store here](https://chrome.google.com/webstore/detail/bblbgcheenepgnnajgfpiicnbbdmmooh).

If you make changes to the extension within this repo and want it pushed up to Chrome, report an issue and mention @paulmolluzzo to make sure I get an email about it.

# Firefox Add-on

Pesticide is also available as a [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/pesticide/)

# Safari Extension

Or you can download a [Safari Extension](http://pesticide.molluzzo.com/pesticide_for_safari.safariextz)

# Bookmarklet

Just add the bookmarklet below to your bookmarks bar.

```javascript
javascript:void(function(){var style=document.getElementById('pesticide');if(style){return style.parentNode.removeChild(style)}var colors="2980b9-3498db-0088c3-33a0ce-66b8da-99cfe7-cce7f3-162544-314e6e-3e5e85-449baf-c7d1cb-4371d0-2f4f90-1a2c51-036cdb-ac050b-ff063f-850440-f1b8e7-ff050c-d90416-d90416-fd3427-ff0043-e80174-f0b-bf0032-0c9-37ffc4-98daca-64a7a0-22746b-86c0b2-a1e7d6-3f5a54-6c9a8f-6c9a9d-da8301-c06000-d95100-d23600-fca600-b31e00-ee8900-de6d00-e8630c-b33600-ff8a00-ff9619-e57c00-e26e0f-cc5400-33848f-60a1a6-438da1-449da6-bf0000-400000-22746b-64a7a0-98daca-0c9-37ffc4-6ee866-027353-012426-a2f570-59a600-7be500-305900-ff62ab-800b41-ff1583-803156-cc1169-ff0430-f805e3-d107b2-4a0263-240018-64003c-b4005a-dba0c8-cc0256-d6606d-e04251-5e001f-9c0033-d90047-ff0053-bf3668-6f1400-ff7b93-ff2f54-803e49-cc2643-db687d-db175b";var selectors="body0article0nav0aside0section0header0footer0h10h20h30h40h50h60main0address0div0p0hr0pre0blockquote0ol0ul0li0dl0dt0dd0figure0figcaption0table0caption0thead0tbody0tfoot0tr0th0td0col0colgroup0button0datalist0fieldset0form0input0keygen0label0legend0meter0optgroup0option0output0progress0select0textarea0details0summary0command0menu0del0ins0img0iframe0embed0object0param0video0audio0source0canvas0track0map0area0a0em0strong0i0b0u0s0small0abbr0q0cite0dfn0sub0sup0time0code0kbd0samp0var0mark0bdi0bdo0ruby0rt0rp0span0br0wbr";var rule="{{selector}} { outline:1px solid {{color}} !important }";var CSS=selectors.split(0).reduce(function(prev,curr,idx,arr){ prev[idx]=curr+"{outline:1px solid #"+prev[idx]+" !important}";return prev;},colors.split("-") ).join('');var style=document.createElement('style');style.id="pesticide";style.textContent=CSS;document.getElementsByTagName('head')[0].appendChild(style);}());
```

# Author

[MRMRS](http://mrmrs.cc "Adam Morse - Designer Developer")

# Contributors

Built and iterated by the following nice people

* [Rafael Rinaldi](https://github.com/rafaelrinaldi "Rafael Rinaldi")
* [Paul Molluzzo](https://github.com/paulmolluzzo)
* [JC](https://github.com/colindresj)
* [Chris Rebert](https://github.com/cvrebert)
* [François Beaufort](https://github.com/beaufortfrancois)
* [Zach Reed](https://twitter.com/bluetidepro "Zach Reed - Front-End Designer/Developer")
* [Chris Van](https://github.com/cvan)
* [Jitendra Joshi](https://github.com/joshijitendra)
* [David Hemphill](https://github.com/davidhemphill)
* [kirkas](https://github.com/kirkas)
* [mrmrs](http://mrmrs.io)

# License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
