import React, { useRef, useState } from 'react';
import { StyledSelect } from './styled';
import useOutsideClick from '../../hooks/useOutsideClick';
import caretDown from '../../assets/caret-down.svg';

const Select = ({
  options,
  onChange,
  selectedValue,
}) => {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(() => {
    const index = options.findIndex(opt => opt.value === selectedValue);
    return options[index];
  });

  useOutsideClick(selectRef, () => { setIsOpen(false); })
  
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  }
  
  const selectOption = (e, selectedOption) => {
    e.stopPropagation();
    setSelected(selectedOption);
    toggleOpen();
    onChange(selectedOption.value);
  };
  
  return (
    <StyledSelect
      ref={selectRef}
      onClick={toggleOpen}
      $isOpen={isOpen}
    >
      <div>
        <p>{selected.title}</p>
        <img src={caretDown} />
      </div>

      {isOpen && (
        <div>
          {options.map(option => (
            <div
              key={option.title}
              onClick={(e) => selectOption(e, option)}
            >{option.title}</div>
          ))}
        </div>
      )}
    </StyledSelect>
  )
};

export default Select;
