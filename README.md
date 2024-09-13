# RangeSlider

Tiny HTML range slider with two thumbs. Perfect for price range sliders.
2.6kB of minified and gzipped JS and CSS.

[View Demo](https://codepen.io/vovayatsyuk/full/ZEvPJeW)

## Installation

Download source files and add them to the page:

```html
<head>
    <script src="range-slider.js" defer></script>
    <link href="range-slider.css" rel="stylesheet">
</head>
```

Minified versions:

 - [range-slider.min.js](https://cdn.jsdelivr.net/npm/@swissup/range-slider@latest/range-slider.min.js)
 - [range-slider.min.css](https://cdn.jsdelivr.net/npm/@swissup/range-slider@latest/range-slider.min.css)

## Usage

Add the following html to use a range slider:

```html
<range-slider name="price" min="0" max="100" value="10-90" step="10"/>
```

Of course, you can work with the component in javascript:

```js
const range = document.querySelector('range-slider');

range.value = [30, 40];

document.addEventListener('range:input', function (event) {
    console.log(event.target.value);
});
```

## Prevent CLS

To prevent layout shift when slider is initializing use the following html
instead of short one:

```html
<range-slider name="price" min="0" max="100" value="10-90" step="10">
    <input class="range" type="range" min="0" max="100" value="10" step="10"/>
    <input class="range" type="range" min="0" max="100" value="90" step="10"/>
    <input class="filler" disabled type="range"/>
</range-slider>
```

## Styles

You can style the component with CSS and CSS variables.

Variable                  | Default Value
--------------------------|--------------
`--thumb-width`           | `16px`
`--thumb-height`          | `var(--thumb-width)`
`--thumb-mobile-scale`    | `1.4`
`--thumb-mobile-width`    | `calc(var(--thumb-width) * var(--thumb-mobile-scale))`
`--thumb-mobile-height`   | `calc(var(--thumb-height) * var(--thumb-mobile-scale))`
`--thumb-border`          | `1px solid #fff`
`--thumb-border-radius`   | `999px`
`--thumb-bg`              | `10 89 254`
`--thumb-mobile-scale`    | `1.4`
`--track-height`          | `4px`
`--track-border-radius`   | `var(--thumb-border-radius)`
`--track-bg`              | `234 234 234`
`--value-font-size`       | `inherit`
`--value-color`           | `40 40 40`
`--value-bg`              | `255 255 255`
`--value-border-radius`   | `3px`

Check out the [Demo Page](https://codepen.io/vovayatsyuk/pen/ZEvPJeW?editors=0010) for more examples.

## Credits

The idea belongs to the [unknown StackOverflow user](https://stackoverflow.com/a/44384948).
