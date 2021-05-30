import style from './Payment.module.scss';

export default function Payment({
  totalPrice,
  startPrice,
  terms,
  parts,
  handleOnChange,
  handleOnBlur,
  sumCredit,
  resaultValue,
  rate,
  textInputTerms,
  inputRange,
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
            className={style.rangeInputTitle}
            value={totalPrice}
            name="totalPrice"
          ></input>
          <label htmlFor="totalPrice" className={style.rangeInputLabel}>
            {totalPrice}
            <span style={{ color: '#000000', marginLeft: 5 }}>$</span>
          </label>
          <input
            type="range"
            id="totalPrice"
            name="totalPrice"
            className={style.rangeInputRange}
            max={inputRange.MAX_PRICE}
            min={inputRange.MIN_PRICE}
            step={inputRange.STEP_TOTAL_PRICE}
            onChange={handleOnChange}
            value={totalPrice}
          ></input>
        </div>

        <div className={style.rangeBox}>
          <label htmlFor="startPrice">Первоначальный взнос</label>
          <input
            type="text"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            id="startPrice"
            className={style.rangeInputTitle}
            value={startPrice}
            name="startPrice"
          ></input>
          <label htmlFor="startPrice" className={style.rangeInputLabel}>
            {startPrice}
            <span style={{ color: '#000000', marginLeft: 5 }}>$</span>
          </label>
          <input
            type="range"
            id="startPrice"
            className={style.rangeInputRange}
            onChange={handleOnChange}
            name="startPrice"
            max={totalPrice}
            min={Math.floor(totalPrice / parts)}
            step={inputRange.STEP_START_PRICE}
            value={startPrice}
          ></input>
        </div>

        <div className={style.rangeBox}>
          <label htmlFor="terms">Срок кредитования</label>
          <input
            type="text"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            id="terms"
            className={style.rangeInputTitle}
            value={terms}
            name="terms"
          ></input>
          <label htmlFor="terms" className={style.rangeInputLabel}>
            {terms}
            <span style={{ color: '#000000', marginLeft: 5 }}>
              {textInputTerms}
            </span>
          </label>
          <input
            type="range"
            id="terms"
            className={style.rangeInputRange}
            onChange={handleOnChange}
            name="terms"
            value={terms}
            max={inputRange.MAX_TERMS}
            min={1}
            step={inputRange.STEP_TERMS}
          ></input>
        </div>
      </div>

      <div className={style.output}>
        <p className={style.title}>Наше предложение</p>
        <span className={style.desc}>Примерная стоимость объекта</span>
        <div className={style.result}>
          <button className={style.buttonCalc}>-</button>
          <span className={style.value}>{`${resaultValue} $`}</span>
          <button className={style.buttonCalc}>+</button>
        </div>

        <div className={style.total}>
          <div className={style.percent}>
            <p>Процентная ставка</p>
            <span className="">{`${rate}%`}</span>
          </div>
          <div className={style.sum}>
            <p>Сумма кредита</p>
            <span className={style.sumCredit}>{`${sumCredit}$`}</span>
          </div>
        </div>
        <button className={style.button}>Оставить Заявку</button>
      </div>
    </div>
  );
}
