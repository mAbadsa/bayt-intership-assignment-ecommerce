import React from "react";
import { Filter } from "./Filter";
import { Sorting } from "./Sorting";

import { ActionsContainer, Divider } from "./styles";

export const Actions = () => {
  return (
    <ActionsContainer>
      <Filter />
      <Divider />
      <Sorting />
    </ActionsContainer>
  );
};

