import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button label={""} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
  size: "small",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Add TO Cart",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

