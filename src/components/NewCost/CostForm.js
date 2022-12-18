import "./CostForm.css";

const CostForm = () => {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control label">
          <label> Название </label>
          <input type="text" />
        </div>
        <div className="new-cost__control label">
          <label> Сумма </label>
          <input type="number" min="0.1" step="0.1" />
        </div>
        <div className="new-cost__control label">
          <label> Дата </label>
          <input type="date" min="2022-12-01" step="2022-12-31" />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> Добавить расход </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;