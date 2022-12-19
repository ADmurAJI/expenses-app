import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Holodilnick",
      amount: 333.23,
    },
    {
      date: new Date(2021, 2, 12),
      description: "MacBook",
      amount: 999.99,
    },
    {
      date: new Date(2021, 2, 12),
      description: "Pistons",
      amount: 10.25,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App Component");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
