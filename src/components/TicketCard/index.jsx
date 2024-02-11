import React from 'react';

import { StyledTicketCard } from './styled';

import filterIcon from '../../assets/filters.svg';
import person from '../../assets/person.svg';

const TicketCard = ({ ticket, isGroupedByUser = false }) => {
  const {
    id,
    title,
    // status,
    // priority,
    tag = [],
    // userId,
  } = ticket;

  return (
    <StyledTicketCard>
      <div>
        <p>{id}</p>
        {!isGroupedByUser && (
          <div>
            <img src={person} />
          </div>
        )}
      </div>

      <h3>{title}</h3>
      <div>
        <div>
          <img src={filterIcon} />
        </div>
        {tag.map(t => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </StyledTicketCard>
  );
};

export default TicketCard;