import Costs from "./components/Costs/Costs";

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
  return (
    <div>
      <h1>Hello, React!!!</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
