import { Component } from 'react';
import Section from 'shared/components/Section/Section';
import FeedbackVariants from 'modules/StatisticsButtons/StatisticsButtons';
import StatisticsCount from 'modules/StatisticsCount/StatisticsCount';
import Notification from 'shared/components/Notification/Notification';

const statisticsOptions = ['good', 'neutral', 'bad'];

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  liveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  calcTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  calcPercent(propName) {
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  }

  render() {
    const total = this.calcTotal();
    const percent = this.calcPercent('good');

    if (!total) {
      return (
        <>
          <Section secondTitle="Please leave feedback">
            <FeedbackVariants
              statisticsOptions={statisticsOptions}
              liveFeedback={this.liveFeedback}
            />
          </Section>
          <Section>
            <Notification message="There is no feedback..." />
          </Section>
        </>
      );
    }

    return (
      <>
        <Section secondTitle="Please leave feedback">
          <FeedbackVariants
            statisticsOptions={statisticsOptions}
            liveFeedback={this.liveFeedback}
          />
        </Section>
        <Section secondTitle="Statistics">
          <StatisticsCount
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            percent={percent}
          />
        </Section>
      </>
    );
  }
}

export default Statistics;
