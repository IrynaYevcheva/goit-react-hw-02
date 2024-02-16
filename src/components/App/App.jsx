import { useState, useEffect } from 'react';

import styles from './App.module.css';

import { Descriptions } from '../Descriptions/Descriptions';
import { Options } from '../Options/Options';
import { Feedback } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = feedbackType => {
    setClicks(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <div className={styles.container}>
      <Descriptions />
      <Options
        clicks={clicks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
