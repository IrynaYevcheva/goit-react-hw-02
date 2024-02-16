import styles from './Feedback.module.css';

export const Feedback = ({ clicks, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      {Object.entries(clicks).map(([element, value]) => (
        <li className={styles.feedbackListItem} key={element}>
          {element}: {value}
        </li>
      ))}
      <li className={styles.feedbackListItem}>total: {totalFeedback}</li>
      <li className={styles.feedbackListItem}>positive: {positiveFeedback}%</li>
    </ul>
  );
};
