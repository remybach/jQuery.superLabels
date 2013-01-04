# jQuery Super Labels Plugin

## About

This plugin was born out of the need to use the label-over-field method for forms I was working on. There are other plugins out there that do pretty much the same thing, but none of them had the - for lack of a better word - sexiness that I was looking for. This implementation makes the label slide across the field☨ when gaining focus and fade out when a value is entered.

This method only really works for the following: input[type="text"], input[type="search"], input[type="url"], input[type="tel"], input[type="email"], input[type="password"], input[type="number"], textarea, and finally there's select field support thrown in too.

☨ Uses the easing plugin if available.

## Who's using it?

[Here](https://github.com/remybach/jQuery.superLabels/blob/master/seen-on.md) is a list of sites that use Super Labels. If you've used this plugin and would like to add your site to the list either fork the project, update the file, and submit a pull request or [let me know](http://remy.bach.me.uk/get-in-touch) through my website.

## Demo

A demo of some of the functionality can be found on my site [here](http://remy.bach.me.uk/superlabels_demo/), but is also included in the repository in the `demo` folder.

## Usage

You need to make sure that the element containing both the field and the label has `position:relative;`. Other than that, the plugin should have enough flexibility to handle most of your needs.

### Basic

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

Lastly, you can choose to ONLY apply superLabels to specific fields if you wish by selecting them instead of the form as follows:

	$('input.foo, textarea.bar, select.baz').superLabels();

### Advanced

There are quite a number of options you can pass the plugin additional to the two I mentioned above:

* `autoCharLimit` - Whether to automatically attempt to determine the number of characters after which to fade the label out or not (see below for more on this). _(default: false)_
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

#### "Character Limit"

Last, but not least, you can choose to only fade out the label *after* a certain number of characters have been typed. You can make use of this by adding a `data-sl-char-limit` (as of version 1.1.2) with the number of characters you wish for any given field (simply leave it out if you don't want to use this).

For example, to make the label fade out only *after* 20 characters have been typed in the field:

	<label for="text-input">Name</label>
	<input type="text" name="text-input" value="" data-sl-char-limit="20" />

As of version 1.2.0, you can now choose to let superLabels do the heavy lifting for you and let it automatically try to guess the character length☨. You can do this by using the above `autoCharLimit` option, _or_ by setting the `data-sl-char-limit` to `auto` for a given field.

The `autoCharLimit` option will be overridden by whatever is specified in the `data-sl-char-limit` attribute for that given element.

☨ Note that this is only an approximation. Unless a mono-spaced font is used, there isn't a method of figuring out _exactly_ what length the characters are that _isn't_ expensive in terms of performance.

## Concerning placeholders

According to [the spec](http://www.w3.org/wiki/HTML/Elements/input/text) placeholders are meant to be used to represent "a short hint (a word or short phrase) intended to aid the user with data entry." *NOT* as a replacement for labels.

The way superLabels uses placeholders (as of version 1.1.1) is as follows:

* If there is a label AND a placeholder for the field, the placeholder becomes the label's title so that it shows up when you hover over the label.
* If there is JUST the placeholder, it becomes the label for the field.

##Known Bugs

Below I'll list any bugs that I'm aware of and will try to get around to fixing as soon as I can.

* Auto filling of form fields that is performed by some browsers (other than Chrome) causes a visual bug. Currently the label stays visible and positioned on top of the field while the field has a value. I've found a bug report for Firefox [here](https://bugzilla.mozilla.org/show_bug.cgi?id=184761).
* Opacity bug with bold label text in IE. This was pointed out by [alensa](https://github.com/alensa) in [this bug](https://github.com/remybach/jQuery.superLabels/issues/11). The proposed fix is to add a background colour to the label in your CSS.

#### License

MIT License - [http://remybach.mit-license.org/](http://remybach.mit-license.org/ 'Link through to read my License.')
