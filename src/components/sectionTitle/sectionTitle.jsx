import React, { Component } from 'react';
import FeedbackOptions from 'components/feedbackOptions/feedbackOptions';
import Statistics from 'components/statistics/statistics';

class SectionTitle extends Component {
  static defaultProps = {
    step: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedbackChange = evt => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + this.props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          onFeedbackChange={this.handleFeedbackChange}
        />
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default SectionTitle;
