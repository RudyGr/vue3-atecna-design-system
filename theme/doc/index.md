```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
```

# Vue Theme

This _theme_ for [Vue.js](https://vuejs.org/) is using tokens defined at the top level (i.e. `:where(html)`) to build its own internal tokens. It also defines specific variants (`light` and `dark`) at `html` level based on the top-level tokens.

It then use those internal tokens to defines theme-specific tokens depending on the context. E.g.:

```css
:root {
  color-scheme: light;

  --vue-color-focus: var(--vue-color-focus-light);
  --vue-color-primary: var(--vue-color-primary-light);
  --vue-color-surface: var(--vue-color-surface-light);
  --vue-color-border: var(--vue-color-border-light);
}
```

## Theme Tokens

### font-family

```html story
<dockit-css-showcases
  css-props-names="--vue-font-family,--vue-font-family-code"
  component-type="text"
  style-key="font-family"
></dockit-css-showcases>
```

### font-size

```html story
<dockit-css-showcases
  css-props-prefix="--vue-font-size"
  component-type="text"
  style-key="font-size"
></dockit-css-showcases>
```

### font-weight

```html story
<dockit-css-showcases
  css-props-prefix="--vue-font-weight"
  component-type="text"
  style-key="font-weight"
></dockit-css-showcases>
```

### letter-spacing

```html story
<dockit-css-showcases
  css-props-prefix="--vue-letter-spacing"
  component-type="text"
  style-key="letter-spacing"
></dockit-css-showcases>
```

### line-height

```html story
<dockit-css-showcases
  css-props-prefix="--vue-line-height"
  component-type="text"
  style-key="line-height"
  long-text
></dockit-css-showcases>
```

### background-color

```html story
<dockit-css-showcases
  css-props-prefix="--vue-color"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### color

```html story
<dockit-css-showcases
  css-props-prefix="--vue-color"
  component-type="text"
  style-key="color"
></dockit-css-showcases>
```

### spaces

```html story
<dockit-css-showcases css-props-prefix="--vue-spacing"></dockit-css-showcases>
```

### box-shadow

```html story
<dockit-css-showcases
  css-props-prefix="--vue-shadow"
  component-class="box"
  style-key="box-shadow"
  checkered-background="false"
></dockit-css-showcases>
```

```html story
<dockit-css-showcases
  css-props-prefix="--vue-border-radius"
  component-class="box"
  style-key="border-radius"
  checkered-background="false"
></dockit-css-showcases>
```
