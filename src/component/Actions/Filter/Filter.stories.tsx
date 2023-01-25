import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Filter } from ".";

export default {
  title: "Components/Filter",
  component: Filter,
  argTypes: {},
} as Meta<typeof Filter>;

const Template: StoryFn<typeof Filter> = (args) => <Filter {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

