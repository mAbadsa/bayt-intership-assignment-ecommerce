import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { RatingStar } from "./RatingStar";

export default {
  title: "Components/RatingStar",
  component: RatingStar,
  argTypes: {
    initialValue: {
      control: "number",
    },
  },
} as Meta<typeof RatingStar>;

const Template: StoryFn<typeof RatingStar> = (args) => (
  <RatingStar initialValue={4} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  initialValue: 4,
};

