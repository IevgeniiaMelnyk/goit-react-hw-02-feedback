import PropTypes from 'prop-types';
import Button from 'shared/components/Button/Button';
import { firstLetterToUpperCase } from '../../utils/firstLetterToUpperCase.js';
import { List } from './StatisticsButtons.styled.js';

const FeedbackVariants = ({ statisticsOptions, liveFeedback }) => {
  const elements = statisticsOptions.map(name => (
    <li key={name}>
      <Button onClick={() => liveFeedback(name)} type="button">
        {firstLetterToUpperCase(name)}
      </Button>
    </li>
  ));

  return <List>{elements}</List>;
};

export default FeedbackVariants;

FeedbackVariants.propTypes = {
  statisticsOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveFeedback: PropTypes.func.isRequired,
};
