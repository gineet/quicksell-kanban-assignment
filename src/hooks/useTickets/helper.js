import { GROUP_OPTIONS, SORT_OPTIONS, STATUS_OPTIONS, PRIORITY_OPTIONS } from '../../consts';

// --------- TICKET SORTING METHODS ---------------

/**
 * @param tickets - The array of tickets
 * @returns - A copy of the tickets array sorted by the ticket titles alphabetically
 */
const sortTicketsByTitle = (tickets) => tickets.toSorted((ticket1, ticket2) => {
  return ticket1.title < ticket2.title ? -1 : 1;
});


/**
 * @param tickets - The array of tickets
 * @returns - A copy of the tickets array sorted by the ticket priorities (high to low)
 */
const sortTicketsByPriority = (tickets) => tickets.toSorted((ticket1, ticket2) => {
  if (ticket1.priority < ticket2.priority) {
    return 1;
  } else if (ticket1.priority > ticket2.priority) {
    return -1;
  }
  return 0;
})


/**
 * The exposed function which is supposed to be called to sort the tickets.
 * Figures out which sorting method to pick and then returns the required sorted array
 * 
 * @param sortBy - One of the @constant SORT_OPTIONS values to decide the sorting
 * @param tickets - The (usually unsorted) array of tickets received from the API
 * @returns - A copy of the tickets array sorted as required
 */
export const getSortedTickets = (sortBy, tickets) => {
  switch (sortBy) {
    case SORT_OPTIONS.TITLE: return sortTicketsByTitle(tickets);
    case SORT_OPTIONS.PRIORITY: return sortTicketsByPriority(tickets);
    default: return tickets;
  }
};


// --------- TICKET GROUPING METHODS ---------------

/**
 * @param tickets - A Sorted Array of tickets, based on the desired sorting order
 * @returns - An object with @constant STATUS_OPTIONS as keys, mapped to tickets that have that status
 * 
 * @see - Skips the ticket if it's status is not included in the STATUS_OPTIONS
 */
const groupTicketsByStatus = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    // Invalid status (not known to us)
    if (!Object.values(STATUS_OPTIONS).includes(ticket.status)) {
      return acc;
    }

    if (ticket.status in acc) {
      acc[ticket.status].push(ticket);
    } else {
      acc[ticket.status] = [ticket];
    }

    return acc;
  }, {});
};


/**
 * @param tickets - A Sorted Array of tickets, based on the desired sorting order
 * @returns - An object with @constant PRIORITY_OPTIONS as keys, mapped to tickets that have that priority
 * 
 * @see - Skips the ticket if it's priority is not included in the PRIORITY_OPTIONS
 */
const groupTicketsByPriority = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    // Invalid status (not known to us)
    if (!Object.values(PRIORITY_OPTIONS).includes(ticket.priority)) {
      return acc;
    }

    if (ticket.priority in acc) {
      acc[ticket.priority].push(ticket);
    } else {
      acc[ticket.priority] = [ticket];
    }

    return acc;
  }, {});
};


/**
 * @param tickets - A Sorted Array of tickets, based on the desired sorting order
 * @returns - An object with the User IDs as keys, mapped to tickets that are assigned to this user
 */
const groupTicketsByUser = (tickets) => {
  const result = tickets.reduce((acc, ticket) => {
    if (ticket.userId in acc) {
      acc[ticket.userId].push(ticket);
    } else {
      acc[ticket.userId] = [ticket];
    }

    return acc;
  }, {});
  return result;
}


/**
 * The exposed function which is supposed to be called to group the tickets.
 * Figures out which grouping method to pick and then returns the required grouped object
 * 
 * @param groupBy - One of the @constant GROUP_OPTIONS values to decide the grouping
 * @param tickets - The sorted array of tickets that we generated using our sorting methods
 * @returns - An object with keys that are groups, and tickets that belong to that group.
 * 
 * @see - groupBy not belonging to GROUP_OPTIONS returns the same array back (WILL THROW AN ERROR)
 */
export const getGroupedTickets = (groupBy, tickets) => {
  switch (groupBy) {
    case GROUP_OPTIONS.STATUS: return groupTicketsByStatus(tickets);
    case GROUP_OPTIONS.PRIORITY: return groupTicketsByPriority(tickets);
    case GROUP_OPTIONS.USER: return groupTicketsByUser(tickets);
    default: return tickets;
  }
};






