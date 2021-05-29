import './AllMarkup.scss';

export default function AllMarkup() {
  return (
    <div className="container">
      <h2 className="title">КАЛЬКУЛЯТОР ИПОТЕКИ</h2>

      <div className="renderOptions">
        <div className="renderOptions__item">Расчет платежа</div>
        <div className="renderOptions__item">Расчет стоимости объекта</div>
      </div>

      <div className="payment">
        <div className="inputForm">
          <div className="rangeBox">
            <label htmlFor="totalPrice">Стоимость недвижимости</label>
            <input id="totalPrice" className="rangeInput"></input>
          </div>

          <div className="rangeBox">
            <label htmlFor="startPrice">Первоначальный взнос</label>
            <input id="startPrice" className="rangeInput"></input>
          </div>

          <div className="rangeBox">
            <label htmlFor="terms">Срок кредитования</label>
            <input id="terms" className="rangeInput"></input>
          </div>
        </div>

        <div className="output">
          <p className="title">Наше предложение</p>
          <span className="desc">Примерная стоимость объекта</span>
          <div className="result">
            <button className="calc">-</button>
            <span className="value">20</span>
            <button className="calc">+</button>
          </div>

          <div className="total">
            <div className="percent">
              <p>Процентная ставка</p>
              <span className="">10%</span>
            </div>
            <div className="sum">
              <p>Сумма кредита</p>
              <span className="">1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
