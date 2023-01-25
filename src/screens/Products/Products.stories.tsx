import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Products } from ".";

export default {
  title: "Screens/Products",
  component: Products,
  argTypes: {},
} as Meta<typeof Products>;

const Template: StoryFn<typeof Products> = (args) => <Products {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

