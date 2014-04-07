# Pesticide

Kill your css layout bugs.  *Without* 2000 clicks in chrome dev tools.

## WTF is this?

Sometimes if I am trying to sleuth a layout problem in css, all I want is every
single element on the page to show me where its outline is.  And I want all the
outline colors to be different per element because, well sometimes I need to
tell stuff apart. The pesticide toggle has proved much faster for me than
clicking around in browser dev tools when trying to uncover what css is
causing me problems.

# Getting started

If you like pre-processing your css like I do, you can drop any of the Sass,
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

If you like to use vanilla css, you can either keep it commented out at the
bottom of your css file, or include it as an extra request in the head of your
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
Then run `gulp`.
That will set up:

* Livereload
* Stylesheet compilation
* Csslint
* CSS minification

*It's important to note that Sass is the default pre-processor set in the gulpfile, so if you plan to use Less or Stylus, you should change the `preProcessor` value before running `gulp`.*

# Chrome Extension

The source for the Pesticide Chrome extension is included beginning from v0.2. The extension is [available in the Chrome Webstore here.](https://chrome.google.com/webstore/detail/bblbgcheenepgnnajgfpiicnbbdmmooh).

If you make changes to the extension within this repo and want it pushed up to Chrome, report an issue and mention @paulmolluzzo to make sure I get an email about it.

# Author

[MRMRS](http://mrmrs.cc "Adam Morse - Designer Developer")

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
