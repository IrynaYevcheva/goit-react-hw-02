import styles from './Options.module.css';

export const Options = ({
  clicks,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <div className={styles.buttonList}>
      {Object.keys(clicks).map(element => (
        <button
          className={styles.optionsBtn}
          onClick={() => updateFeedback(element)}
          key={element}
        >
          {element}
        </button>
      ))}
      {totalFeedback ? (
        <button className={styles.optionsBtn} onClick={resetFeedback}>
          Reset
        </button>
      ) : null}
    </div>
  );
};
