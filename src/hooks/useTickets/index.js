import { useState, useEffect, useCallback } from 'react';
import { getSortedTickets, getGroupedTickets } from './helper';
import { GROUP_OPTIONS, SORT_OPTIONS } from '../../consts';

const useTickets = (
  tickets = [],
  options = {
    group: GROUP_OPTIONS.STATUS,
    sort: SORT_OPTIONS.TITLE,
  },
) => {
  const [orderedTickets, setOrderedTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('grouping') || options.group);
  const [sortBy, setSortBy] = useState(localStorage.getItem('sorting') || options.sort);

  const setGroupingFilter = useCallback((groupFilter) => {
    localStorage.setItem('grouping', groupFilter);
    setGroupBy(groupFilter);
  }, []);

  const setSortingFilter = useCallback((sortFilter) => {
    localStorage.setItem('sorting', sortFilter);
    setSortBy(sortFilter);
  }, []);

  /**
   * This method re-runs the logic to arrange the tickets based
   * on the selected sorting filter and the grouping filter.
   */
  const reorderTickets = useCallback(() => {
    const sortedTickets = getSortedTickets(sortBy, tickets);
    const groupedTickets = getGroupedTickets(groupBy, sortedTickets);
    setOrderedTickets(groupedTickets);
  }, [tickets, sortBy, groupBy]);

  
  useEffect(() => {
    reorderTickets();
  }, [reorderTickets]);

  return {
    orderedTickets,
    setGroupBy: setGroupingFilter,
    setSortBy : setSortingFilter,
    groupedBy: groupBy,
    sortedBy: sortBy,
  }
};

export default useTickets;
