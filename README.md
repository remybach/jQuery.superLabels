# jQuery Super Labels Plugin

## About

This plugin was born out of the need to use the label-over-field method for forms I was working on. There are other plugins out there that do pretty much the same thing, but none of them had the - for lack of a better word - sexiness that I was looking for. This implementation makes the label slide across the field☨ when gaining focus and fade out when a value is entered.

This method only really works for the following: input[type="text"], input[type="search"], input[type="url"], input[type="tel"], input[type="email"], input[type="password"], input[type="number"], textarea, and finally there's select field support thrown in too.

☨ Uses the easing plugin if available.

## Demo

Here's a (very) [simple demo](http://remy.bach.me.uk/superlabels_demo/) of Super Labels in action.

## Usage

You need to make sure that the element containing both the field and the label has `position:relative;`. Other than that, the plugin should have enough flexibility to handle most of your needs.

#### Basic

The quickest and easiest way to use this plugin is as follows:

	// Don't forget to do this *after* the DOM has loaded.
	jQuery(function($) {
		$('form').superLabels();
	});

Running the plugin on a form will automatically apply the magic to the accepted fields listed above.

If you find that you need to position the labels slightly differently, pass in `labelLeft` and/or `labelTop` as follows:

	$('form').superLabels({
		labelLeft:5,
		labelTop:5
	});

#### Advanced

There are quite a number of options you can pass the plugin additional to the two I mentioned above:

* `baseZindex` - The base z-index which we display on top of. _(default: 0)_
* `debug` - Whether or not to show console messages. _(default: false)_
	* Note: this is not available in the minified version.
* `duration` - Time of the slide in milliseconds. _(default: 500)_
* `easingIn` -  The easing in function to use for the slide. _(default: 'easeInOutCubic')_
* `easingOut` -  The easing out function to use for the slide. _(default: 'easeInOutCubic')_
* `fadeDuration` - Duration of animation when it's fade only. _(default: 250)_
* `labelLeft` - The distance from the left for the label. _(default: 0)_
	* You can pass in 'px' if you're the pedantic type. For example: `labelLeft:'5px'`
* `labelTop` - The distance from the top for the label. _(default: 0)_
	* As above: `labelTop:'5px'`
* `noAnimate` - Whether or not to animate. If set to true, will function the same as a normal placeholder. _(default:false)_
	* This is a 'just in case' option that can/should be used when there are performance issues with animating.
* `opacity` - The opacity to fade the label to. _(default: 0.5)_
* `slide` - Whether or not to slide the label across the input field. _(default: true)_
* `wrapSelector` - The selector for the element you have wrapping each field. _(default: false)_
	* This is used to find the label - use as a last resort. Rather make sure the field and label are next to each other in your markup, or failing that, that your labels use the `for` attribute that point to the field's `name` or `id`.

#### Known Bugs

Below I'll list any bugs that I'm aware of and will try to get around to fixing as soon as I can.

* Auto filling of form fields that is performed by some browsers causes a visual bug. Currently the label stays visible and positioned on top of the field while the field has a value. I've submitted a bug report for Chrome [here](https://code.google.com/p/chromium/issues/detail?id=135307), and have found a bug report for Firefox [here](https://bugzilla.mozilla.org/show_bug.cgi?id=184761).

#### License

MIT License - [http://remybach.mit-license.org/](http://remybach.mit-license.org/ 'Link through to read my License.')
