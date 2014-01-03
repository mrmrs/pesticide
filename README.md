# Pesticide

Kill your css layout bugs.
Without 2000 clicks in chrome dev tools.

## WTF is this?

Sometimes if I am trying to sleuth a layout problem in css, all I want
is every single element on the page to show me where its outline is.
And I want all the outline colors to be different per element because,
well sometimes I need to tell stuff apart. This has proved much faster
for me than clicking around in chrome dev tools when sleuthing what css
is causing me problems.

# Getting started

If you like sass like me, you can just drop this partial into your includes. If you want to turn off
outlines, just set the variable ```$layout-debug``` at the top of _layout_debug.scss to false (or anything that isn't true).

If you like to use vanilla css, you can either keep it commented out at the bottom of your css file,
or include it as an extra request in the head of your html file like so...
```
<link rel="stylesheet" href="layout_debug.css">
```
Make sure not to send it to production though because that wouldn't be the best.

*Enjoy. And feel free to make the color scheme more pretty and send a pull request :)*


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
