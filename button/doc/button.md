```js script
import Button from '@divriots/starter-vue3/button/src/Button.vue';
```

# Button

This is a very simple example of a button.

First, you'll need to import the button component:

```ts
import Button from '@divriots/starter-vue3/button/src/Button.vue';
```

Component Button currently only implements a variant prop which can take 3 values - `primary`, `secondary` and `minimal`:

## Primary

```js preview-story
export const primary = () => ({
  components: { Button },
  template: `<Button variant="primary">Primary</Button>`,
});
```

## Secondary

```js preview-story
export const secondary = () => ({
  components: { Button },
  template: `<Button variant="secondary">Secondary</Button>`,
});
```

## Minimal

```js preview-story
export const Minimal = () => ({
  components: { Button },
  template: `<Button variant="minimal">Minimal</Button>`,
});
```
