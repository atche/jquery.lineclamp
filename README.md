# jQuery Line Clamp

jquery.lineclamp.js is multiline text with ellipsis plugin.

## Demo

Under Construction

## Usage

### Launching Code

```javascript
$(selector).lineClamp(num);
```

### Options

* Overwrite Display Property

```javascript
$(selector).lineClamp(num, {display: 'block'});
```

* Inner wrapper Element: Default is `<span />`

```javascript
$(selector).lineClamp(num, {wrapper: '<i />'});
```

* Responsive

```javascript
$(selector).lineClamp(num, {responsive: true});
```

### Specify Trim Target

```html
<element>
  keepTEXT. <inline class="jq-lineClamp-trim">trimTEXT.</inline> keepTEXT.
</element>
```

## Requirements

jQuery 1.7.x or later.

## Supported Browsers

IE8+ and Modern Browsers, most recent stable version

## License

Licensed under the MIT license.
