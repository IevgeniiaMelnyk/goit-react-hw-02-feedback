import PropTypes from 'prop-types';
import { Text, TextTotal } from './StatisticsCount.styled';

const StatisticsCount = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <TextTotal total="total">Total: {total}</TextTotal>
      <Text>Positive feedback: {percent}%</Text>
    </>
  );
};

export default StatisticsCount;

StatisticsCount.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
