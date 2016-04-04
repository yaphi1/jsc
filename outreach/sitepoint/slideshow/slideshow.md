"I just want to make a simple JavaScript slideshow without jQuery."

The slideshow, also known as the image carousel, the slider, or the rotating banner, is a commonly requested tutorial among people who are learning JavaScript.

In this tutorial, we'll cover the following topics:

 - Make a basic slideshow without any external libraries like jQuery.
 - Understand UX and accessibility issues, including whether you should
   use a slideshow at all.
 - Add controls to your slideshow.

This tutorial assumes you know some JavaScript including functions, click events, and style changes.  For anyone who would find it helpful, I've written a [quick roadmap of which things to learn to do practical things with JavaScript as soon as possible](https://simplestepscode.com/learn-javascript/).


## Make a Basic Slideshow

### The HTML

For the HTML, we'll need a container for the slides, and the slides themselves.  Here's how that will look:

```html
<ul id="slides">
	<li class="slide showing">Slide 1</li>
	<li class="slide">Slide 2</li>
	<li class="slide">Slide 3</li>
	<li class="slide">Slide 4</li>
	<li class="slide">Slide 5</li>
</ul>
```

### The CSS
The core CSS will need to accomplish these things:

- Define a container for the slides.
- Position the slides on top of each other in their container.
- Define what a slide should look like when it's showing or hiding.
- Transition the opacity for a fade effect.

Here's how the core CSS will look:

```css
/*
essential styles:
these make the slideshow work
*/

#slides{
	position: relative;
	height: 300px;
	padding: 0px;
	margin: 0px;
	list-style-type: none;
}

.slide{
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 1;

	-webkit-transition: opacity 1s;
	transition: opacity 1s;
}

.showing{
	opacity: 1;
	z-index: 2;
}
```

Now, you can add other styles to change how the slideshow looks.  I used the following for this demo:

```css
/*
non-essential styles:
just for appearance; change whatever you want
*/

.slide{
	font-size: 40px;
	padding: 40px;
	box-sizing: border-box;
	background: #333;
	color: #fff;
}

.slide:nth-of-type(1){
	background: red;
}
.slide:nth-of-type(2){
	background: orange;
}
.slide:nth-of-type(3){
	background: green;
}
.slide:nth-of-type(4){
	background: blue;
}
.slide:nth-of-type(5){
	background: purple;
}
```


### The JavaScript

The JavaScript has one job: hide the current slide and show the next one.  To accomplish this, we just have to change the classes of the slides in question.

Here's how the JavaScript will look:

```javascript
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}
```

Let's break down what's happening here.

 1. First, we're using `querySelectorAll` to get the slides from our
    container.
 2. Next, we're setting a variable to keep track of the current slide.
 3. Then we're creating an interval to show the next slide every two
    seconds (expressed as 2000 ms).

Let's take a deeper look at what's happening inside the `nextSlide` function:

 - First we change the current slide's class so it's not showing.  The CSS transition handles the fade out automatically.
 - Then we add one to the current slide, but we use the % operator to cycle back to zero if we've reached the end of the slides.  As a quick reminder, the % operator divides two numbers and spits out the remainder.  This is great for cases where you have to do math with cycles like a clock or a calendar.  In this case, we have 5 slides, so here's what happens with each number: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.
 - Once we have the new slide's number, we change that slide's class so that the slide is showing.  Once again, our CSS opacity transition handles the fade effect automatically.

Congrats!  Now you have a basic slideshow.

Compatibility note:
CSS transitions aren't compatible with IE9 and below, so instead of a fade effect, the slideshow will degrade gracefully by showing the next slide.

Here's the basic slideshow in action:

<iframe height='277' scrolling='no' src='//codepen.io/yaphi1/embed/PNOZRr/?height=277&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yaphi1/pen/PNOZRr/'>Basic JavaScript Slideshow without jQuery</a> by Yaphi (<a href='http://codepen.io/yaphi1'>@yaphi1</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>



## UX and Accessibility

Before using a slideshow, you'll need to think carefully about its role on your page.  If you're not careful, you can ruin the user experience and accessibility of your site.


### How a Slideshow Can Ruin Your Site

#### The Slideshow Can Hide Critical Content

If something is a priority on your site, it shouldn't be hidden in a slideshow.  You can't depend on people to see a given slide under ideal circumstances, let alone when accessibility concerns come into play.

According to [research at the University of Notre Dame](https://erikrunyon.com/2013/07/carousel-interaction-stats/), only 1.07% of people clicked on a feature in a slideshow, and out of that already small fraction of people, 3 percent or fewer clicked on any individual slide besides the first one.  This example shows how it can be dangerous to depend on a slideshow for critical content.

#### The User Can Get Confused about the Main Purpose of the Site

This is especially a problem with big homepage slideshows.  If you can't decide what to show the user, how can you expect the user to decide what to do?  Your site should have a clear and obvious path to whatever the user needs to do, and if the slideshow gets in the way of that, it might be time to revisit the page's strategy.

WiderFunnel, a conversion optimization firm, tested the effectiveness of slideshows and came to the following conclusion:
"We have tested rotating offers many times and have found it to be a poor way of presenting home page content."
They did a detailed write-up of their results here: http://www.widerfunnel.com/rotating-offers-the-scourge-of-home-page-design/

#### Mobile Users Might Not Be Happy

A slideshow can increase loading times and data usage on mobile devices in addition to making controls tricky.



### When to use a slideshow

#### Giving a General Impression

When you don't care if the user sees any individual slide but you just want them to get a general visual impression of something, it can be fine to use a slideshow.  In this scenario, if the user only sees one slide, nothing major would be lost.

#### When the Content Is Easy to Access Outside of the Slideshow

For example, maybe you want to show photos of a resort, a museum, an event, or a product line in a slideshow, but you also have a full photo gallery or product collection elsewhere in an easy-to-reach part of your site.  Then it would be fine to use a slideshow.

#### In a Progressive Enhancement Situation

This is more general, but it shouldn't cause too many problems if you want to use a slideshow as a neat visual thing that's not crucial to the functionality of the site.  As long as it's a neat extra and not a critical roadblock, you should be fine.



### Accessibility

If your slideshow's content is important enough that you need to make it accessible, then think hard about whether you want to present that content as a slideshow in the first place.

If you insist on using a slideshow, [here's a great article on making it accessible](http://www.sitepoint.com/unbearable-accessible-slideshow/).

According to that article:

> There are five principles that need to be met to create an accessible
> slideshow:
> 
>  1. Allow the user to stop all movement
>  2. Provide visible controls accessible to the keyboard, mouse and touch
>  3. Provide a valid and understandable focus order through the slideshow
>  4. Valid coding and style sheets
>  5. Provide a meaningful alternative to the slideshow

Additionally, a commenter in that article pointed out a [helpful resource for deciding whether to use a slideshow](http://shouldiuseacarousel.com/).

To make our slideshow more accessible, we're going to add some controls.

## Add Controls to Your Slideshow

It's time to add a "Pause/Play" button, a "Next" button, and a "Previous" button.

### The Pause/Play Button

First, add the button to the HTML:

```html
<button class="controls" id="pause">Pause</button>
```

Next, add this to the JavaScript:

```javascript
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};
```

Here's what's happening in the script:

- The playing variable stores whether the slideshow is playing.
- We're storing the pause button in a variable so we don't need to keep searching our document for t.
- The `pauseSlideshow` function pauses the slideshow, and makes the "Pause" button say "Play" instead.
- The `playSlideshow` function plays the slideshow, and makes the "Play" button say "Pause" instead.
- Finally, we're attaching a click handler so that the Pause/Play button will toggle the slideshow between pausing and playing.


Here's how your slideshow will work with the pause button:

<iframe height='268' scrolling='no' src='//codepen.io/yaphi1/embed/ZWaQjK/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yaphi1/pen/ZWaQjK/'>JavaScript Slideshow With Pause Button</a> by Yaphi (<a href='http://codepen.io/yaphi1'>@yaphi1</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>



### Next and Previous Buttons

First add the "Next" and "Previous" buttons to your HTML:

```html
<button class="controls" id="previous">Previous</button>
<button class="controls" id="next">Next</button>
```

For your JavaScript, change this...

```javascript
function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}
```

...to this:

```javascript
function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}
```

In the above script, we've added a general `goToSlide` function for more flexibility.  We've also changed the math a tiny bit inside the `currentSlide` variable in order to avoid negative numbers.  To test this for yourself, pick a number for slides.length and see what happens to `currentSlide` as `n` changes.

Now add this JavaScript to make the buttons do what they need to when clicked:

```javascript
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function(){
	pauseSlideshow();
	previousSlide();
};
```

Now you have working controls!

Here's how the slideshow might look with controls and some added styles:

<iframe height='268' scrolling='no' src='//codepen.io/yaphi1/embed/eZeJLR/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yaphi1/pen/eZeJLR/'>JavaScript Slideshow With Controls</a> by Yaphi (<a href='http://codepen.io/yaphi1'>@yaphi1</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Note that we're pausing the slideshow when the user clicks "Next" or "Previous" so that the user's navigation won't be thwarted by autoplay.

Because the controls are HTML buttons, they can be accessed through the keyboard automatically.

Feel free to style and position the controls however you like as long as they are clear and usable.

If you want to add left and right arrow keyboard controls (not included here), make sure you turn those controls off when a user might use the arrows elsewhere like a text box for example.


## Fallbacks When JavaScript Is Turned Off

How you handle fallbacks for your slideshow will depend on your goals.  You can either show only the first image, or you can show all of the images in a list.

If the slideshow's main purpose is to give a general visual impression of something and it's more important to preserve the page's layout than show all of the pictures, then you'll want to show the first image.

If all of the images need to be seen, then you can list them out.

In any case, we'll cover the steps here.

### Hide Controls When JavaScript Is Off

Use CSS to hide the controls by default.

```css
.controls{
	display: none;
}
```

Then use JavaScript to show the controls.  This way, the user will only see the controls if JavaScript is enabled.

```javascript
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}
```

The above code loops through each of the controls and makes them all visible.


### List Slide Images When JavaScript Is Off

First change your `.slide` class from `position: absolute;` to `position: static;`.  That way, the slides will be listed out by default.

Then add JavaScript to loop through each of the slides and change their position to absolute, like so: (make sure to place this code after your `slides` variable is defined)

```javascript
for(var i=0; i<slides.length; i++){
	slides[i].style.position = 'absolute';
}
```

That way, the slides won't be listed out if JavaScript is available.



## Conclusion

We've gone over how to make a basic slideshow, how to handle some of the UX and accessibility concerns, and how to add controls.

The most important takeaway is this:
Whenever you put something on a page, think about how it affects the user's experience and how it helps achieve the site's main goal.  If there isn't a clear answer, maybe it's time to reconsider.

So what do you think?  Do you have any stories of great slideshow experiences? Horrible ones? Funny ones?  Feel free to share in the comments.




