import Button from '~/button/src/Button.vue';
import '~/theme/src/theme.scss';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
  args: {
    label: 'Button',
  },
};

interface ButtonProps {
  name: string;
  rounded: boolean;
}

//👇 We create a “template” of how args map to rendering
const Template = (args: ButtonProps) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'Button',
  variant: 'primary',
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
  ...Primary.args,
  rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
  ...Secondary.args,
  rounded: true,
};

export const Minimal = Template.bind({});
Minimal.args = {
  ...Primary.args,
  variant: 'minimal',
};

export const MinimalRounded = Template.bind({});
MinimalRounded.args = {
  ...Minimal.args,
  rounded: true,
};
