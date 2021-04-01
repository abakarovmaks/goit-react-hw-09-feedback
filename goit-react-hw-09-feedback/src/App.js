import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  useEffect(() => {
  console.log('Такой вот useEffect');
}, [])

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
       case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        console.warn(`Wow! What is this??`)
    }
  };
  
  const options = ['good', 'neutral', 'bad'];
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(100 * good / countTotalFeedback());
    return percentage > 0 ?  percentage : 0;
  }


  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given!" />
          )}
        </Section>
      </Container>
    );
  }

