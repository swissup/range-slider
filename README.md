# RangeSlider

Html range slider component with two thumbs.
[View Demo](https://codepen.io/vovayatsyuk/pen/ZEvPJeW?editors=0010)

 -  No dependencies
 -  Tiny size
 -  Powered by the native range input

## Installation

Download the `range-slider.js` file and add it to the page:

```html
<head>
    <script src="range-slider.js" defer></script>
</head>
```

## Usage

Add the following html to use a range slider:

```html
<range-slider name="price" min="0" max="100" value="10-90" step="10"></range-slider>
```

Of course, you can work with the component in javascript:

```js
const range = document.querySelector('range-slider');

range.value = [30, 40];

document.addEventListener('range:input', function (event) {
    console.log(event.target.value);
});
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

Check out the [Demo Page](https://codepen.io/vovayatsyuk/pen/ZEvPJeW?editors=0010) for more examples.

## Credits

The idea belongs to the [unknown StackOverflow user](https://stackoverflow.com/a/44384948).
