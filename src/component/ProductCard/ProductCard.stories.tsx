import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ProductCard } from ".";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  argTypes: {},
} as Meta<typeof ProductCard>;

const Template: StoryFn<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  productImg: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 69.03,
};

