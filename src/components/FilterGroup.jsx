import React from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
  margin-bottom: 25px;

  h4 {
    font-size: 14px;
    color: var(--dark-gray-2, #474747);
    margin-bottom: 10px;
  }
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--dark-gray-2, #474747);
  margin-bottom: 10px;
  cursor: pointer;

  input {
    width: 22px;
    height: 22px;
    accent-color: var(--primary, #C92071);
    cursor: pointer;
  }
`;

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
  return (
    <GroupContainer>
      <h4>{title}</h4>
      {options.map((opt, index) => (
        <OptionItem key={index}>
          <input
            type={inputType}
            name={inputType === 'radio' ? title : undefined}
            value={opt.value || opt.text}
          />
          <span>{opt.text}</span>
        </OptionItem>
      ))}
    </GroupContainer>
  );
};

export default FilterGroup;