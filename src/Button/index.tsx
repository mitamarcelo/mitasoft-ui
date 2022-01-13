import React from 'react';
import { Button as StyledButton, IButtonProps } from './Button.styles';

export interface IButton extends IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick, variant }: IButton) => {
  return (
    <StyledButton onClick={onClick} variant={variant || 'primary'}>
      {children}
    </StyledButton>
  );
};

export default Button;
