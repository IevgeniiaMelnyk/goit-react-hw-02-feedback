import PropTypes from 'prop-types';
import { ManeSection, FirstTitle, SecondTitle } from './Section.styled.js';

function Section({ firstTitle, secondTitle, children }) {
  return (
    <ManeSection>
      {firstTitle && <FirstTitle>{firstTitle}</FirstTitle>}
      <SecondTitle>{secondTitle}</SecondTitle>
      {children}
    </ManeSection>
  );
}

export default Section;

Section.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  children: PropTypes.element,
};
