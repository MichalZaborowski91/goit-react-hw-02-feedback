import React from 'react';
const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = (good / totalFeedback) * 100;

  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive Feedback: {Math.floor(positiveFeedback)}%</p>
        </>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};
export default Statistics;
