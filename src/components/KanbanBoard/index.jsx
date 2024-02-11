import React, { useMemo, useCallback } from 'react';
import GroupedFilters from '../GroupedFilters';
import KanbanColumn from '../KanbanColumn';
import { StyledKanban } from './styled';

import { SORT_OPTIONS, GROUP_OPTIONS } from '../../consts';
import useTickets from '../../hooks/useTickets';
import { getColumnConfig } from './helper';

const KanbanBoard = ({ data }) => {
  const {
    orderedTickets,
    groupedBy,
    sortedBy,
    setSortBy,
    setGroupBy,
  } = useTickets(data.tickets, {
    group: GROUP_OPTIONS.STATUS,
    sort: SORT_OPTIONS.TITLE,
  });
  
  // Handler for changing the Grouping filter
  const handleGrouping = useCallback((groupBy) => {
    setGroupBy(groupBy);
  }, []);

  // Handler for changing the sorting filter
  const handleOrdering = useCallback((orderBy) => {
    setSortBy(orderBy);
  }, []);
  
  // Generate the column configuration to render the columns based on the grouping order
  const columnConfig = useMemo(
    () => getColumnConfig(orderedTickets, data.users, groupedBy),
    [orderedTickets, data.users, groupedBy]
  );

  return (
    <StyledKanban>
      <header>
        <GroupedFilters
          rootName='Display'
          filters={[
            {
              title: 'Grouping',
              options: [
                { title: 'Status', value: GROUP_OPTIONS.STATUS },
                { title: 'Priority', value: GROUP_OPTIONS.PRIORITY },
                { title: 'User', value: GROUP_OPTIONS.USER },
              ],
              onChange: handleGrouping,
              selectedValue: groupedBy,
            },
            {
              title: 'Ordering',
              options: [
                { title: 'Title', value: SORT_OPTIONS.TITLE },
                { title: 'Priority', value: SORT_OPTIONS.PRIORITY },
              ],
              onChange: handleOrdering,
              selectedValue: sortedBy,
            },
          ]}
        />
      </header>

      <main>
        {columnConfig.map(column => (
          <KanbanColumn 
            key={column.key}
            config={column}
            isGroupedByUser={groupedBy === GROUP_OPTIONS.USER}
          />
        ))}
      </main>
    </StyledKanban>
  );
};

export default KanbanBoard;
