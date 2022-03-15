import Button from '~/button/src/Button.vue';
import '~/theme/src/theme.scss';

export const primary = () => ({
  components: { Button },
  template: `<Button variant="primary">Primary</Button>`,
});

export const secondary = () => ({
  components: { Button },
  template: `<Button variant="secondary">Secondary</Button>`,
});

export const Minimal = () => ({
  components: { Button },
  template: `<Button variant="minimal">Minimal</Button>`,
});
