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
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 50%;
  height: 1.5rem;
  border-radius: 0.25rem;
`;
