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
debug variable at the top of the partial, which you can set to false if you
want to turn off outlines:
```
// sass
$pesticide-debug: false;
```
```
// less
@pesticide-debug: false;
````
```
// stylus
pesticide-debug = false
````

If you like to use vanilla CSS, you can either keep it commented out at the
bottom of your CSS file, or include it as an extra request in the head of your
html file like so...
```
<link rel="stylesheet" href="pesticide.css">
```
Make sure not to send it to production though because that wouldn't be the best.

*Enjoy. And feel free to make the color scheme more pretty and send a pull request :)*

# Development

If you want to tweak the source code you might find it useful to use some of
the available gulp tasks included with the project. To set up automation with
gulp just press the following keys:
```
cd pesticide
npm install -g gulp
npm install
```
Because Pesticide comes in Sass, Less, and Stylus flavors, you can adjust gulp to run with your pre-processor of choice. To do so, simply change the `preProcessor` variable at the top of the gulpfile to either sass, less or stylus as a string value. For example:
```
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

`gulp generate`

If you want to generate your own custom color table:

`COLOR_TABLE=path/to/custom/table.json gulp generate`

# Chrome Extension

The source for the Pesticide Chrome extension is included beginning from v0.2. The extension is [available in the Chrome Web Store here](https://chrome.google.com/webstore/detail/bblbgcheenepgnnajgfpiicnbbdmmooh).

If you make changes to the extension within this repo and want it pushed up to Chrome, report an issue and mention @paulmolluzzo to make sure I get an email about it.

# Firefox Add-on

Pesticide is also available as a [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/pesticide/)

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
