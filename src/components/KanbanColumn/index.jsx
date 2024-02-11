import React from 'react';
import TicketCard from '../TicketCard';
import { StyledKanbanColumn } from './styled';

import plus from '../../assets/plus.svg';
import ellipsis from '../../assets/ellipsis.svg';

const KanbanColumn = ({ config, isGroupedByUser }) => {
  const {
    title,
    tickets,
    icon,
    available = false,
  } = config;

  return (
    <StyledKanbanColumn
      $isGroupedByUser={isGroupedByUser}
      $isUserAvailable={available}
    >
      <div>
        <div>
          <img src={icon} />
        </div>
        <h4>{title}</h4>
        <p>{tickets.length}</p>
        <div></div>
        <img src={plus} />
        <img src={ellipsis} />
      </div>

      <div>
        {tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            isGroupedByUser={isGroupedByUser}
          />
        ))}
      </div>
    </StyledKanbanColumn>
  )
};

export default KanbanColumn;
