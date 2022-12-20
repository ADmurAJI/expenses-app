import Card from "../UI/Card";
import CostItem from "./CostItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

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
        {filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Costs;
