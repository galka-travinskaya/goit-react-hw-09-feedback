import React, { useState } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

import { FEEDBACK_OPTIONS } from './data/constans';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    console.log(feedback);
    setState({ ...state, [feedback]: Number(state[feedback] + 1) });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => acc + item, 0);
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((state.good / total) * 100) : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          statictics={FEEDBACK_OPTIONS}
          data={state}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
