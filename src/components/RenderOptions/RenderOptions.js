import style from './RenderOptions.module.scss';

export default function RenderOptions({
  items,
  activeElement,
  handleClickElement,
}) {
  return (
    <div className={style.renderOptions}>
      {items.map((item, index) =>
        activeElement === index ? (
          <div
            key={index}
            className={`${style.renderOptions__item} ${style.active}`}
            onClick={() => handleClickElement(index)}
          >
            {item}
          </div>
        ) : (
          <div
            key={index}
            className={`${style.renderOptions__item} ${style.noactive}`}
            onClick={() => handleClickElement(index)}
          >
            {item}
          </div>
        ),
      )}
    </div>
  );
}
