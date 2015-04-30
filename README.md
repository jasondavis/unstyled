#Unstyled Framework

Unstyled is a responsive CSS3/HTML5 framework with the simplicity of HTML5 Boilerplate and the grid system of Bootstrap. Made for people who don't normally like frameworks.

The main problem of CSS is that you end up writing more positioning than styling. This is what we were trying to resolve.

The special thing about Unstyled is that it's extremely lightweight and almost completely unstyled, still featuring some sweet, sweet things, for example:
  - Simplified classes for columns
  - Automatic responsive menu, with a non-JavaScript fallback
  - Lightweight scrollTo plugin
  - Lightweight Equal Heights plugin
  - A choice between CSS Reset and Normalize.css
  - Print-friendly styles
  - Fixed minor annoyances (unnecessary outlines, removed background from a:active under IE10+)
  - Intelligent fallbacks for IE8 and 9 (placeholder.js, html5shiv, respond.js)
  - IE10 hack for Windows 8 & Windows Phone 8 fixing its not recognizing media queries

##Version
Version 1.1


## Grid System and short-hand classes
With Bootstrap you can do:

``<div class="col-md-6 col-sm-12"></div>``

This is sometimes sub-optimal and slow to type. Therefore, we introduced a few common short-hand classes

| Class name | What it's short for             | Size on a Desktop | Size on a Tablet | Size on a small screen |
|------------|---------------------------------|-------------------|------------------|------------------------|
| ``.full``      | ``.container``                      | 1170px            | 750px            | 320+px                 |
| ``.most``      | ``.col-md-8 .col-sm-12 .col-xs-12`` | 75%               | 100%             | 100%                   |
| ``.half``      | ``.col-md-6 .col-sm-12 .col-xs-12`` | 50%               | 100%             | 100%                   |
| ``.third``     | ``.col-md-4 .col-sm-6 .col-xs-12``  | 33.333%           | 50%              | 100%                   |
| ``.fourth``    | ``.col-md-3 .col-sm-3 .col-xs-6``   | 25%               | 50%              | 50%                    |
| ``.sixth``     | ``.col-md-2 .col-sm-4 .col-xs-6``   | 16.666%           | 33.333%          | 50%                    |

### The ``.row`` class
The ``.row`` class does a ``margin: 0 -15px;`` on an element, effectively removing its default paddings.
A common use would be ``<div class="full row"></div>`` which is going to extend the viewport to align inner elements more easily.

### Column Offsets
Colum offsetting means to leave X columns between the current element and the next one like so:
``<div class="col-md-6 col-md-offset-1"></div>``. This is going to take up 7 columns, with one of the columns being empty.

We believe consistency is important and it is quite rare to actually use column offsets so they are disabled.
Still, they are available, so if you want to use them, you should open up ``less/mixins/grid-framework.less``, then scroll to the bottom and remove the last 3 comments.
Refer to [Bootstrap's Offsetting documentation](http://getbootstrap.com/css/#grid-offsetting) if that is what you are looking for.

## Animations
Some elements are animated by default to provide a smooth effects to links, inputs, and textareas. They do not use a linear transition but instead they use the timing curve you can see on Google's Material Design.

If you want to utilize the same bezier-curve on other elements, use the ``.animate();`` mixin

## Elements
### Links
``<a>`` tags within an article provide a bigger clickable area to make it easier for mobile users. If you are using a border of any kind for decorating them, feel free to see base.less, line #77-82.
### Lists
``<ul>`` and ``<li>`` elements have no paddings, no margins, and no list style, except in ``<article>`` and ``.content`` elements since most people use them for other purposes.

### Navigations
Navigations should follow this structure:
```
<nav role="navigation" class="nav">
    <a href="#" class="menu-toggle"></a>
    <ul>
        <li><a href="#">Link</a>
            <ul>
                <li><a href="#">Submenu</a>
                    <ul>
                        <li><a href="#">Level 3</a>
                            <ul>
                                <li><a href="#">Level 4, but can go to infinity!</a></li>
                                <li><a href="#">Level 4, but can go to infinity!</a></li>
                                <li><a href="#">Level 4, but can go to infinity!</a></li>
                                <li><a href="#">Level 4, but can go to infinity!</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Level 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
            </ul>
        </li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```
This is going to automatically generate a responsive navigation with a neatly animated side menu. It functions on all devices, with or without JavaScript enabled, and allows you to have unlimited levels of submenus.

### Helper Classes
| Class Name    | Short Alias | Description                                                         |
|---------------|-------------|---------------------------------------------------------------------|
| ``.hidden``       | ``.hide``       | ``display: none !important``                                           |
| ``.invisible``    | ``.invis``      | ``visibility: hidden``                                                 |
| ``.clearfix``     | ``.clear``      | A standard clearfix class                                           |
| ``.left``         | ``.l``          | ``float: left !important``                                             |
| ``.right``        | ``.r``          | ``float: right !important``                                            |
| ``.tLeft``        | ``.tl``         | ``text-align: left``                                                   |
| ``.tRight``       | ``.tr``         | ``text-align: right``                                                  |
| ``.tCenter``      | ``.tc``         | ``text-align: center``                                                 |
| ``.center-block`` | ``.cb``         | Center an element using ``margin: 0 auto; float: none; display: block`` |
| ``.relative``     | ``.rel``        | ``position: relative``                                                 |
| ``.absolute``     | ``.abs``        | ``position: absolute``                                                 |

### Elements
``.mask`` - An overlay for elements with position: relative intended to provide a description.

``.nav`` - A responsive navigation.

``.nav.nav-right`` - Place the navigation button on the right side on small screens.

``.browsehappy`` - A notification for people with old browsers (IE<9).

``#logo`` - A default logo element which will float on the left side on desktops, and become centered in lower resolutions.

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site] [1]:

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable 
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.  

## JavaScripts
### Responsive Navigations
See the markup under the section "Navigations" for exmple structure
Then you can call the responsiveNav plugin
``$('.nav').responsiveNav();``

### Hashtag URLs for sections
If you have a ``<section id="section1">`` and an ``<a href="#section1">`` inside an element with ``class="nav"``, you can call:

``$('.nav').sectionLinks();``

This is going to translate all the links inside the navigation into smooth-scrolling animations while preserving normal links.

### Equal Heights
If you want to make a set of elements inside a ``<div class="parent">`` to have equal heights, call the equalHeights plugin for them. The following call will equalize all elements with the class .elements:
``$('.elements').equalHeights();``

### scrollTo Lite
Most of the time all you want to do is scroll just up and down so no need to load scrollTo.js.
Remove if you decide to go with scrollTo.js
Usage: ``scrollTo('#element', 1000);``

## Third-Party JavaScripts
We use these third-party scripts for legacy support (Internet Explorer versions 8 and lower). They won't load in newer or non-Internet Explorer browsers.
### [HTML5 Shiv](https://github.com/aFarkas/html5shiv)
This script is the de facto standard to enable use of HTML5 sectioning elements in legacy Internet Explorer. Loaded via Modernizr only if IE <9 is present.
### [Respond.js](https://github.com/scottjehl/Respond)
A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8)
### [Placeholders.js](http://jamesallardice.github.io/Placeholders.js/)
Placeholders.js is a JavaScript polyfill for the HTML5 placeholder attribute. It's lightweight, has zero dependencies and works in pretty much any browser you can imagine.
### [Selectivizr.js](http://selectivizr.com/)
Enables you to use funky CSS selectors otherwise unsupported by older browsers.