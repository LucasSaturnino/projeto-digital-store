import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: var(--dark-gray-2, #474747);
`;

const OptionsGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${(props) => props.$radius};
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$isColor
      ? `
        width: 31px;
        height: 31px;
        background-color: ${props.$colorValue};
        border: ${props.$isSelected ? '2px solid var(--primary, #C92071)' : '2px solid transparent'};
        outline: ${props.$isSelected ? '2px solid var(--primary, #C92071)' : 'none'};
        outline-offset: 2px;
      `
      : `
        width: 48px;
        height: 48px;
        font-size: 16px;
        font-weight: bold;
        color: ${props.$isSelected ? '#FFFFFF' : 'var(--dark-gray-2, #474747)'};
        background-color: ${props.$isSelected ? 'var(--primary, #C92071)' : '#FFFFFF'};
        border: ${props.$isSelected ? '2px solid var(--primary, #C92071)' : '1px solid var(--light-gray-2, #CCCCCC)'};
      `}

  &:hover {
    border-color: var(--primary, #C92071);
  }
`;

const ProductOptions = ({
  title,
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  selectedValue,
  onChange,
}) => {
  const [selected, setSelected] = useState(selectedValue || options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  const isColorType = type === 'color' || shape === 'circle';
  const computedRadius = isColorType ? '50%' : radius;

  // Sincroniza o estado interno caso a prop `selectedValue` mude externamente
  const currentSelected = selectedValue !== undefined ? selectedValue : selected;

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <OptionsGroup>
        {options.map((option, index) => {
          const isSelected = currentSelected === option;

          return (
            <OptionButton
              key={index}
              $isColor={isColorType}
              $radius={computedRadius}
              $colorValue={isColorType ? option : undefined}
              $isSelected={isSelected}
              onClick={() => handleSelect(option)}
              type="button"
              aria-label={option}
            >
              {!isColorType && option}
            </OptionButton>
          );
        })}
      </OptionsGroup>
    </Container>
  );
};

export default ProductOptions;