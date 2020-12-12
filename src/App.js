import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

import Statistics from './components/Statistics/Statistics';

import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleIncrement = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    console.log(this.state);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onHandleIncrement}
        />
        <h1>Statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        <Notification message="No feedback given" />
      </div>
    );
  }
}

export default App;
