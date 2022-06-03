import React from "react";
import Listing from "./Listing";
import Data from "../services/data.json";
import { useFilterContext } from "../context/FilterContext";

const Listings = () => {
  const listings = Data;
  const { filter } = useFilterContext();

  return (
    <>
      {listings
        .filter((listingSkill) => {
          const newArray = [
            ...listingSkill.tools,
            ...listingSkill.languages,
            listingSkill.level,
            listingSkill.role,
          ];

          return !newArray.every((result, i) => result !== filter[i]);
        })
        .map((filteredListing) => (
          <Listing key={filteredListing.id} data={filteredListing} />
        ))}
    </>
  );
};

export default Listings;
