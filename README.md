Bliss.slider.js
============

Got tired of searching for the right slider only to discover numerous plugins that are buggy and/or overly complex. 
I therefore decided to code my own. 

Built upon jQuery version 1.8.1. ~~Procedural based (functions only), likely to be object based/plugin soon~~

Now a plugin! :D


Features
--------

- Responsive
- Autoplay
- Previous/Next links
- Slider markers

Just call the blissSlider function like so:

```javascript
$("#slider").blissSlider({
	auto: 1,
	transitionTime: 500,
	timeBetweenSlides: 4000
});
```

Current markup required
```
<div id="slider" class="slider-container">
	<ul class="slider">
		<li class="slide">
			<div class="slide-bg">
				<img src="img/image1.jpg" alt="An Image" draggable="false">
			</div>
			<div class="slide-content">
				<h2>Header 1</h2>
				<p>An example paragraph 1</p>
				<a href="#">Call to action 1</a>
			</div>
		</li>
	</ul>
	<div class="slider-controls">
		<div class="slide-nav">
			<a href="#" class="prev">Prev</a>
			<a href="#" class="next">Next</a>
		</div>
		<ul class="slide-list">
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
		</ul>
	</div>
</div>
```
