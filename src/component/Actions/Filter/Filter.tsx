import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCategoryId,
  setFilteredProductsByCategory,
  useGetFilteredProductsByCategoryQuery,
} from "../../../redux";
import { FilterContainer, Title, Form, Label } from "./styles";

const categories = [
  { id: 0, name: "All" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Furniture" },
  { id: 4, name: "Shoes" },
];

export const Filter = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(0);
  function handleChange(evt: ChangeEvent<HTMLSelectElement>) {
    dispatch(setCategoryId(+evt.target.value));
    setCategory(+evt.target.value);
  }

  return (
    <FilterContainer>
      <Title>Filter By:</Title>
      <Form aria-label="Filtering">
        <Label htmlFor="category">Categories</Label>
        <select id="category" value={category} onChange={handleChange}>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </Form>
    </FilterContainer>
  );
};

