import styled from 'styled-components';

export const Text = styled.p`
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 600;
  width: 272px;
  /* background-color: ${({ total }) => (total ? 'green' : 'white')}; */
  /* background-color: ${({ total }) => total && 'green'}; */
`;

export const TextTotal = styled(Text)`
  background-color: green;
  color: white;
  border-radius: 6px;
`;
