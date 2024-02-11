import React, { useState, useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

import { StyledGroupFilters } from './styled'
import Select from '../Select';

import caretDown from '../../assets/caret-down.svg';
import filterIcon from '../../assets/filters.svg';

const GroupedFilters = ({ rootName, filters }) => {
  const filtersRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick(filtersRef, () => { setIsOpen(false); });

  const openFilters = () => {
    setIsOpen(true);
  }

  return (
    <StyledGroupFilters
      ref={filtersRef}
      onClick={openFilters}
      $isOpen={isOpen}
    >
      <div>
        <img src={filterIcon} />
        <p>{rootName}</p>
        <img src={caretDown} />
      </div>

      {isOpen && (
        <div>
          {filters.map((item) => (
            <React.Fragment key={item.title}>
              <p>{item.title}</p>
              <Select
                options={item.options}
                onChange={item.onChange}
                selectedValue={item.selectedValue}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </StyledGroupFilters>
  )
};

export default GroupedFilters;
