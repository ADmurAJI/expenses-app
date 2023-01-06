import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 3, 12),
    description: "Refrigerator",
    amount: 333.23,
  },
  {
    id: "c2",
    date: new Date(2021, 2, 1),
    description: "MacBook",
    amount: 999.99,
  },
  {
    id: "c3",
    date: new Date(2021, 10, 2),
    description: "Pistons",
    amount: 100.25,
  },
  {
    id: "c4",
    date: new Date(2020, 5, 4),
    description: "Car",
    amount: 10000,
  },
  {
    id: "c5",
    date: new Date(2020, 10, 12),
    description: "Bike",
    amount: 250,
  },
  {
    id: "c6",
    date: new Date(2020, 9, 12),
    description: "Laptop",
    amount: 150,
  },
  {
    id: "c7",
    date: new Date(2022, 5, 3),
    description: "Computer",
    amount: 200,
  },
  {
    id: "c8",
    date: new Date(2022, 6, 5),
    description: "Sneakers",
    amount: 26.99,
  },
  {
    id: "c9",
    date: new Date(2022, 7, 7),
    description: "Sweater",
    amount: 20.35,
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
