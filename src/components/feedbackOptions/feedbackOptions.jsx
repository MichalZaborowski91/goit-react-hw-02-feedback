import React, { Component } from 'react';

class FeedbackOptions extends Component {
  handleGoodBtn = () => {
    this.props.onFeedbackChange('good');
  };
  handleNeutralBtn = () => {
    this.props.onFeedbackChange('neutral');
  };
  handleBadBtn = () => {
    this.props.onFeedbackChange('bad');
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleGoodBtn}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralBtn}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadBtn}>
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
