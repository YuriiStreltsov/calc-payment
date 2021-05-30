import { useEffect, useState } from 'react';

import Container from '../Container/Container';
import Title from '../Title/Title';
import style from './SectionCalc.module.css';
import RenderOptions from '../RenderOptions/RenderOptions';
import Payment from '../Payment/Payment';

const TITLE = 'Калькулятор ипотеки';
const ITEMS_OPTIONS = ['Расчет платежа', 'Расчет стоимости объекта'];

const INITIAL_STATE = {
  TOTAL_PRICE: 3000,
  PARTS: 3,
  TERMS: 1,
  RATE: 8.8,
  TEXT_TERMS: 'год',
};

const INPUT_RANGE_PARAMS = {
  MIN_PRICE: 3000,
  MAX_PRICE: 1000000,
  MAX_TERMS: 30,
  STEP_TOTAL_PRICE: 500,
  STEP_START_PRICE: 500,
  STEP_TERMS: 1,
};

export default function SectionCalc() {
  const [totalPrice, setTotalPrice] = useState(INITIAL_STATE.TOTAL_PRICE);
  const [startPrice, setStartPrice] = useState(
    INITIAL_STATE.TOTAL_PRICE / INITIAL_STATE.PARTS,
  );
  const [terms, setTerms] = useState(1);
  const [sumCredit, setSumCredit] = useState();
  const [resaultValue, setResaultValue] = useState();
  const [activeElement, setActiveElement] = useState(0);
  const [textInputTerms, setTextInputTerms] = useState(
    INITIAL_STATE.TEXT_TERMS,
  );
  useEffect(
    () => setStartPrice(Math.round(totalPrice / INITIAL_STATE.PARTS)),
    [totalPrice],
  );

  useEffect(() => {
    const result = totalPrice - startPrice;
    setSumCredit(result);
  }, [totalPrice, startPrice]);

  useEffect(() => {
    const { RATE } = INITIAL_STATE;
    const rateOfMonth = RATE / 100 / 12;
    const resaultValue =
      sumCredit *
      ((rateOfMonth * Math.pow(1 + rateOfMonth, terms * 12)) /
        (Math.pow(1 + rateOfMonth, terms * 12) - 1));
    setResaultValue(Math.floor(resaultValue));
  }, [terms, sumCredit]);

  useEffect(() => {
    if (Number(terms) === 1) {
      setTextInputTerms('год');
    } else if (Number(terms) > 1 && terms <= 4) {
      setTextInputTerms('года');
    } else {
      setTextInputTerms('лет');
    }
  }, [terms]);

  const handleOnChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'totalPrice':
        if (Number(value) || Number(value) === 0) {
          setTotalPrice(value);
        }
        if (Number(value) > INPUT_RANGE_PARAMS.MAX_PRICE) {
          setTotalPrice(INPUT_RANGE_PARAMS.MAX_PRICE);
          break;
        }
        break;
      case 'startPrice':
        if (Number(value) || Number(value) === 0) {
          setStartPrice(Number(value));
        }
        if (Number(value) > Number(totalPrice)) {
          setStartPrice(totalPrice);
          break;
        }
        break;
      case 'terms':
        if (Number(value) || Number(value) === 0) {
          setTerms(Number(value));
        }
        if (Number(value) > INPUT_RANGE_PARAMS.MAX_TERMS) {
          setTerms(INPUT_RANGE_PARAMS.MAX_TERMS);
          break;
        }
        break;

      default:
        break;
    }
  };

  const handleOnBlur = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'totalPrice':
        if (value === '') {
          setTotalPrice(INITIAL_STATE.TOTAL_PRICE);
          break;
        }
        setTotalPrice(value);
        break;
      case 'startPrice':
        if (value === '') {
          setStartPrice(Math.round(totalPrice / INITIAL_STATE.PARTS));
          break;
        }
        setStartPrice(value);
        break;
      case 'terms':
        if (value === '') {
          setTerms(INITIAL_STATE.TERMS);
          break;
        }
        setTerms(Number(value));
        break;

      default:
        break;
    }
  };

  const handleClickElement = index => {
    setActiveElement(index);
  };

  return (
    <div className={style.Section}>
      <Container>
        <Title title={TITLE} />
        <RenderOptions
          items={ITEMS_OPTIONS}
          handleClickElement={handleClickElement}
          activeElement={activeElement}
        />
        <Payment
          totalPrice={totalPrice}
          startPrice={startPrice}
          terms={terms}
          handleOnChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          sumCredit={sumCredit}
          resaultValue={resaultValue}
          rate={INITIAL_STATE.RATE}
          textInputTerms={textInputTerms}
          inputRange={INPUT_RANGE_PARAMS}
          parts={INITIAL_STATE.PARTS}
        />
      </Container>
    </div>
  );
}
