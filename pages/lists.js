import React from "react";
import Aside from "@components/Aside";
import Listing from "@components/Listing";

function listing() {
  return (
    <div className="flex flex-row">
      <Aside />
      <Listing />
    </div>
  );
}

export default listing;
