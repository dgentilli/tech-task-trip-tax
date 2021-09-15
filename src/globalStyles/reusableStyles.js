import styled from 'styled-components';
import theme from '../theme';

export const NavMenuItemsWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.footer ? 'center' : 'space-between')};
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const ChartHeader = styled.h3`
  text-align: center;
  color: ${theme.color.TEXT_DARK};
`;

export const InputLabel = styled.div`
  color: ${theme.color.TEXT_DARK};
  margin-left: 0.5rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 1.5rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  @media (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

export const Button = styled.button`
  margin: 0.5rem 0.25rem;
  padding: 0.5rem;
  background-color: ${theme.color.ORANGE};
  color: ${theme.color.TEXT_DARK};
  border: none;
  border-radius: 0.25rem;
`;
