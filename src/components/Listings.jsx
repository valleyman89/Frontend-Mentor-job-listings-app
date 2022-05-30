import React, { useContext } from "react";
import { ListingContext } from "../App";
import Listing from "./Listing";

const Listings = () => {
  const listings = useContext(ListingContext);
  return (
    <div>
      <ul>
        {listings.map((listing, i) => (
          <Listing key={listing.id} data={listing} />
        ))}
      </ul>
    </div>
  );
};

export default Listings;
