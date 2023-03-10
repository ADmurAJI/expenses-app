import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
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
      description: name,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveCostData(costData);
    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control label">
          <label> Название </label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control label">
          <label> Сумма </label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control label">
          <label> Дата </label>
          <input
            type="date"
            min="2022-12-01"
            step="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> Добавить расход </button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
