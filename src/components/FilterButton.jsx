import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterButton = ({ skill }) => {
  const { filter, updateFilter } = useFilterContext();

  return (
    <button
      className="skill pointer"
      onClick={() => {
        updateFilter(skill);
      }}
      type="button"
      disabled={filter.includes(skill)}
    >
      {skill}
    </button>
  );
};

export default FilterButton;
