import React from "react";
import LineChart from "../Chart/LineChart";
import SummaryTrans from "./SummaryTrans";
import LinearChart from "./linearChart";

function SummaryContent(props) {
  return (
    <div className="summary__content">
      {/* <LineChart /> */}
      <SummaryTrans />
      <LinearChart />
    </div>
  );
}

export default SummaryContent;
