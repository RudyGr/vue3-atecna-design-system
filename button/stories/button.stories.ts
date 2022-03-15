import '~/theme/src/theme.scss';
import Button from '~/button/src/Button.vue';

export const primary = () => ({
  components: { Button },
  template: `<Button variant="primary">Primary</Button>`,
});

export const secondary = () => ({
  components: { Button },
  template: `<Button variant="secondary">Secondary</Button>`,
});

export const disabled = () => ({
  components: { Button },
  template: `<Button variant="disabled">Disabled</Button>`,
});
