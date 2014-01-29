# [Buggy Boilerplate](https://github.com/VPenkov/buggy-boilerplate)

Buggy Boilerplate (BBP) is a HTML/CSS framework which is based on the infamous [HTML5 Boilerplate](http://html5boilerplate.com) by Paul Irish. Most credits go to his team. Please refer to their fine [documentation](https://github.com/h5bp/html5-boilerplate/blob/master/doc/TOC.md).
We have added a 960px grid system that scales down to smaller displays to provide a responsive layout.
It features the new Normalizer.css 3.0 and jQuery v2.
It should be fully compatible with H5BP.

## Grid System
The grid system features a few classes and is meant to be responsive. It will probably be adjusted in the future.

### Full
```html
<div class="full">
	This is 960px wide by default
</div>
```

### Most
```html
<div class="most">
	This is 640px wide by default which is 3/4 of the layout
</div>
```

### Half
```html
<div class="half">
	This is 480px wide by default which is 1/2 of the layout
</div>
```

### Third
```html
<div class="third">
	This is 320px wide by default which is 1/3 of the layout
</div>
```

### Fourth
```html
<div class="fourth">
	This is 240px wide by default which is 1/4 of the layout
</div>
```

### Eighth
```html
<div class="eighth">
	This is 120px wide by default which is 1/8 of the layout
</div>
```

## Helper Classes

### Positioning
#### Center
The __center__ is meant to put a block element in the center of the website, leaving equal margins on both ends of its containing element.

#### Middle
The __middle__ class is meant to center elements vertically. It's meant to be used like so:
```html
<div class="table">
	<div class="middle">
		This element will be centered vertically
	</div>
</div>
```
Its parent element should have the __table__ class to be able to have a vertically centered element inside.

#### Full Screen
The __fullscreen__ class used in combination with the __middle__, __table__ and __center__ classes would produce an element which has as much height as your window, and its content will always stay in the center.
Example:
```html
<div class="full center tCenter table fullscreen">
    <p class="middle">This paragraph will always be right in the middle of your page.</p>
</div>
```

##### Preventing FOUC (flash of unstyled content) with .fullscreen
1. Load jQuery in the head tag instead of before the ```</body>``` tag;
2. Put this snippet before the body tag:
```html
<script>
$('body').hide();
$(window).load(function() {$('body').show();});
</script>
```
This will hide the whole website until its elements are loaded.

### Text aligns
The __tCenter__ class is meant to center content. It's for inline elements.
__tCenter__ has variations which are pretty obvious: _tLeft_, _tRight_, and _tJustify_.

### Upper
The __upper__ class is meant to CAPITALIZE every text content inside.
Websites are sometimes remade, and when somebody hard-codes all-caps text, it's a pain in the arse to rewrite it. So please enclose all-caps text in a span class="upper" to make people's lives easier. 
Look how easy it is:
```html
<span class="upper">This is a Cool Title</span>
```
It will produce:
> THIS IS A COOL TITLE

### Shadow
Adding the __shadow__ class will provide an element with a subtle shadow. Feel free to adjust it!

### Colors
The __black__ and __white__ colors will make an element black or white obviously.