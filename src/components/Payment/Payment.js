import style from './Payment.module.scss';

export default function Payment({
  totalPrice,
  startPrice,
  terms,
  handleOnChange,
  handleOnBlur,
  sumCredit,
  resaultValue,
  rate,
}) {
  return (
    <div className={style.payment}>
      <div className={style.inputForm}>
        <div className={style.rangeBox}>
          <label htmlFor="totalPrice">Стоимость недвижимости</label>
          <input
            type="text"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            id="totalPrice"
            className={style.rangeInput}
            value={totalPrice}
            name="totalPrice"
          ></input>
        </div>

        <div className={style.rangeBox}>
          <label htmlFor="startPrice">Первоначальный взнос</label>
          <input
            type="text"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            id="startPrice"
            className={style.rangeInput}
            value={startPrice}
            name="startPrice"
          ></input>
        </div>

        <div className={style.rangeBox}>
          <label htmlFor="terms">Срок кредитования</label>
          <input
            type="text"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            id="terms"
            className={style.rangeInput}
            value={terms}
            name="terms"
          ></input>
        </div>
      </div>

      <div className={style.output}>
        <p className={style.title}>Наше предложение</p>
        <span className={style.desc}>Примерная стоимость объекта</span>
        <div className={style.result}>
          <button className={style.calc}>-</button>
          <span className={style.value}>{`${resaultValue}$`}</span>
          <button className={style.calc}>+</button>
        </div>

        <div className={style.total}>
          <div className={style.percent}>
            <p>Процентная ставка</p>
            <span className="">{`${rate}%`}</span>
          </div>
          <div className={style.sum}>
            <p>Сумма кредита</p>
            <span className="">{`${sumCredit}$`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
