# jQuery Super Labels Plugin

## About

This plugin was born out of the need to use the label-over-field method for forms I was working on. There are other plugins out there that do pretty much the same thing, but none of them had the - for lack of a better word - sexiness that I was looking for. This implementation makes the label slide across the field☨ when gaining focus and fade out when a value is entered.

This method only really works for the following: input[type="text"], input[type="search"], input[type="url"], input[type="tel"], input[type="email"], input[type="password"], textarea, and even on select fields.

☨ Uses the easing plugin if available.

## Usage

You need to make sure that the element containing both the field and the label has `position:relative;`. Other than that, the plugin should have enough flexibility to handle most of your needs.

#### Basic

The quickest and easiest way to use this plugin is as follows:

	$('form').superLabels();

Running the plugin on a form will automatically apply the magic to the accepted fields listed above.

If you find that you need to position the labels slightly differently, pass in `labelLeft` and/or `labelTop` as follows:

	$('form').superLabels({
		labelLeft:5,
		labelTop:5
	});

#### Advanced

There are quite a number of options you can pass the plugin additional to the two I mentioned above:

* `baseZindex` - The base z-index which we display on top of. (default: 0)
* `duration` - Time of the slide in milliseconds. (default: 500)
* `easingIn` -  The easing in function to use for the slide. (default: 'easeInOutCubic')
* `easingOut` -  The easing out function to use for the slide. (default: 'easeInOutCubic')
* `fadeDuration` - Duration of animation when it's fade only. (default: 250)
* `opacity` - The opacity to fade the label to. (default: 0.5)
* `labelLeft` - The distance from the left for the label. (default: 0)
* `labelTop` - The distance from the top for the label. (default: 0)
* `slide` - Whether or not to slide the label across the input field. (default: true)
* `wrapSelector` - The selector for the element you have wrapping each field. (default: false)
		This is used to find the label - use as a last resort. Rather make sure the field and label are next to each other in your markup, or failing that, that your labels use the `for` attribute that point to the field's `name` or `id`.

License
-------

MIT License - [http://remybach.mit-license.org/](http://remybach.mit-license.org/ 'Link through to read my License.')