import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => (
  <Pagination productsCount={0} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
  size: "small",
};

