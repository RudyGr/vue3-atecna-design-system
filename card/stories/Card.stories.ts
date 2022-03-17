import Card from '~/card/src/Card.vue';
import '~/theme/src/theme.scss';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Card',
  component: Card,
  args: {
    label: 'Card',
  },
};

interface ButtonProps {
  name: string;
  rounded: boolean;
}

//👇 We create a “template” of how args map to rendering
const Template = (args: ButtonProps) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'Card',
  img: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  type: 'Type de carte',
  date: '17 mars 2022',
  title: 'Title here',
  meta: 'Put a long subtitle here',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus amet repudiandae reiciendis ea quia numquam tenetur quos itaque debitis! Soluta sed quidem est deleniti, nulla ducimus dignissimos porro itaque fugit?',
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Card',
  img: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  type: 'Type de carte',
  date: '17 mars 2022',
  title: 'Title here',
  meta: 'Put a long subtitle here',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus amet repudiandae reiciendis ea quia numquam tenetur quos itaque debitis! Soluta sed quidem est deleniti, nulla ducimus dignissimos porro itaque fugit?',
  doubleButton: false,
};
