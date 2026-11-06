import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;

  h4 {
    font-size: 14px;
    font-weight: bold;
    color: var(--dark-gray-2, #474747);
    margin-bottom: 12px;
    line-height: 22px;
  }
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--dark-gray-2, #474747);
  cursor: pointer;
  user-select: none;

  input {
    width: 22px;
    height: 22px;
    accent-color: var(--primary, #C92071);
    cursor: pointer;
  }

  span {
    line-height: 22px;
  }
`;

const FilterGroup = ({
  title,
  inputType = 'checkbox',
  options = [],
  selectedValues = [],
  onChange,
}) => {
  return (
    <Container>
      <h4>{title}</h4>
      <OptionList>
        {options.map((option, index) => {
          const optionValue = option.value || option.text;
          const isChecked = Array.isArray(selectedValues)
            ? selectedValues.includes(optionValue)
            : selectedValues === optionValue;

          return (
            <OptionLabel key={index}>
              <input
                type={inputType}
                name={title}
                value={optionValue}
                checked={isChecked}
                onChange={(e) =>
                  onChange && onChange(optionValue, e.target.checked, inputType)
                }
              />
              <span>{option.text}</span>
            </OptionLabel>
          );
        })}
      </OptionList>
    </Container>
  );
};

export default FilterGroup;