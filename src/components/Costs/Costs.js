import Card from "../UI/Card";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";

function Costs(props) {
  const [selektedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selektedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selektedYear} onChangeYear={yearChangeHandler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
