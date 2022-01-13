import styled from 'styled-components';
import colors from '../theme/colors';

export interface IButtonProps {
  variant?: string;
}

export const Button = styled.button`
  background-color: ${({ variant }: IButtonProps) => colors.buttons[variant]};
  padding: 15px;
  color: white;
  border: none;
  border-radius: 5px;
`;
