import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Sorting } from ".";

export default {
  title: "Components/Sorting",
  component: Sorting,
  argTypes: {},
} as Meta<typeof Sorting>;

const Template: StoryFn<typeof Sorting> = (args) => <Sorting {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

