import React from "react";
import DoughnutChart from "../Chart/DoughnutChart";
import SummaryContent from "./SummaryContent";

function Summary(props) {
  return (
    <div className="summary">
      <div className="summary__container">
        <SummaryContent />
        <DoughnutChart />
      </div>
    </div>
  );
}

export default Summary;
