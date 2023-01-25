import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Actions } from "./Actions";

export default {
  title: "Components/Actions",
  component: Actions,
  argTypes: {},
} as Meta<typeof Actions>;

const Template: StoryFn<typeof Actions> = (args) => <Actions {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

