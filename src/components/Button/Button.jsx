import React from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '@/styles';

export default function Button({
  type,
  name,
  icon,
  onClick,
  bg,
  bPad,
  color,
  bRad,
}) {
  return (
    <ButtonContainer
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      type={type}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;
