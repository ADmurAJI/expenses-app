import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: name,
      amount: amount,
      date: new Date(date),
    };

    console.log(costData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control label">
          <label> Название </label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control label">
          <label> Сумма </label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control label">
          <label> Дата </label>
          <input
            type="date"
            min="2022-12-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> Добавить расход </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
