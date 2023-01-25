import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ProductCardsContainer } from ".";

export default {
  title: "Components/ProductCardsContainer",
  component: ProductCardsContainer,
  argTypes: {},
} as Meta<typeof ProductCardsContainer>;

const Template: StoryFn<typeof ProductCardsContainer> = (args) => (
  <ProductCardsContainer {...args} />
);

export const Standard = Template.bind({});
Standard.args = {};

