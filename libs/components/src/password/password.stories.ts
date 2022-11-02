import { Meta, Story } from "@storybook/angular";

import { ColorPasswordComponent } from "./color-password.component";

const examplePassword = "Wq$Jk7JDX#rS";

export default {
  title: "Component Library/Color Password",
  component: ColorPasswordComponent,
  args: {
    password: examplePassword,
    showCount: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "TODO",
    },
  },
} as Meta;

const Template: Story<ColorPasswordComponent> = (args: ColorPasswordComponent) => ({
  props: args,
  template: `
    <color-password [password]="password" [showCount]="showCount"></color-password>
  `,
});

export const ColorPassword = Template.bind({});

export const ColorPasswordCount = Template.bind({});
ColorPasswordCount.args = {
  password: examplePassword,
  showCount: true,
};
