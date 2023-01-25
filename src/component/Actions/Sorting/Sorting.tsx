import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setSortType } from "../../../redux";
import { SortingContainer, Title, Form, Label } from "./styles";

export const Sorting = () => {
  const [sort, setSort] = useState("name");
  const dispatch = useDispatch();

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    dispatch(setSortType(evt.target.value));
    setSort(evt.target.value);
  }

  return (
    <SortingContainer>
      <Title>Sorting By:</Title>
      <Form>
        <div>
          <input
            type="radio"
            id="name"
            name="sort"
            value="name"
            onChange={handleChange}
            checked={sort === "name"}
          />
          <Label htmlFor="name">Name</Label>
        </div>
        <div>
          <input
            type="radio"
            id="price"
            name="sort"
            value="price"
            onChange={handleChange}
            checked={sort === "price"}
          />
          <Label htmlFor="price">Price</Label>
        </div>
      </Form>
    </SortingContainer>
  );
};

