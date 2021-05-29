import style from './Title.module.scss';

export default function Title({ title }) {
  return (
    <div className={style.titleContainer}>
      <h2 className={style.titleText}>{title}</h2>
    </div>
  );
}
