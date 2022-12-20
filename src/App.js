import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Holodilnick",
    amount: 333.23,
  },
  {
    id: "c2",
    date: new Date(2021, 2, 12),
    description: "MacBook",
    amount: 999.99,
  },
  {
    id: "c3",
    date: new Date(2021, 2, 12),
    description: "Pistons",
    amount: 10.25,
  },
];
const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
