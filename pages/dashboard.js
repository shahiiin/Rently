import React from "react";
import Aside from "@components/Aside";
import ContentDashbord from "@components/ContentDashbord";

function dashboard() {
  return (
    <div className="flex flex-row">
      <Aside />
      <ContentDashbord />
    </div>
  );
}

export default dashboard;
