import { GROUP_OPTIONS, PRIORITY_OPTIONS, STATUS_OPTIONS } from '../../consts';

// Icon imports
import person from '../../assets/person.svg';
import noPriority from '../../assets/no.svg';
import low from '../../assets/low.svg';
import medium from '../../assets/medium.svg';
import high from '../../assets/high.svg';
import urgent from '../../assets/urgent.svg';
import backlog from '../../assets/backlog.svg';
import progress from '../../assets/progress.svg';
import todo from '../../assets/todo.svg';


/**
 * @param tickets - An object with tickets that are grouped by status
 * @returns - A Map Object with keys that are values of @constant STATUS_OPTIONS 
 * object with the config required to render the columns status-wise
 */
const getGroupByStatusConfig = (tickets) => {
  const columns = [
    { title: 'Backlog', value: STATUS_OPTIONS.BACKLOG, icon: backlog },
    { title: 'Todo', value: STATUS_OPTIONS.TODO, icon: todo },
    { title: 'In Progress', value: STATUS_OPTIONS.PROGRESS, icon: progress },
  ];

  return columns.map(({ title, value, icon }) => ({
    key: title,
    title: title,
    tickets: tickets[value] || [],
    icon: icon,
  }))
};


/**
 * @param tickets - An object with tickets that are grouped by priority
 * @returns - A Map Object with keys that are values of @constant PRIORITY_OPTIONS 
 * object with the config required to render the columns priority-wise
 */
const getGroupByPriorityConfig = (tickets) => {
  const columns = [
    { title: 'No Priority', value: PRIORITY_OPTIONS.NO_PRIORITY, icon: noPriority },
    { title: 'Urgent', value: PRIORITY_OPTIONS.URGENT, icon: urgent, },
    { title: 'High', value: PRIORITY_OPTIONS.HIGH, icon: high },
    { title: 'Medium', value: PRIORITY_OPTIONS.MEDIUM, icon: medium },
    { title: 'Low', value: PRIORITY_OPTIONS.LOW, icon: low },
  ];
  
  return columns.map(({ title, value, icon }) => ({
    key: title,
    title: title,
    tickets: tickets[value] || [],
    icon: icon,
  }));
};

/**
 * @param tickets - An object with tickets that are grouped by the users they're assigned to
 * @returns - A Map Object with keys that are User Ids received from the API, mapped to
 * the config required to render the columns user-wise.
 */
const getGroupByUserConfig = (tickets, users) => {
  return users
    .toSorted((user1, user2) => user1.name < user2.name ? -1 : 1)
    .map(user => ({
      key: user.name,
      title: user.name,
      tickets: tickets[user.id] || [],
      available: user.available,
      icon: person,
    }));
};


/**
 * The exposed function that can be called to get the column config required to render the columns
 * 
 * @param tickets - An object with keys that are groups, mapped to tickets that belong to this grouping
 * @param users - The array of users fetched from the API
 * @param groupBy - Values of one of the @constant GROUP_OPTIONS object, denoting the grouping type
 * 
 * @returns - The required column configuration map
 */
export const getColumnConfig = (tickets, users, groupBy) => {
  switch (groupBy) {
    case GROUP_OPTIONS.STATUS: return getGroupByStatusConfig(tickets);
    case GROUP_OPTIONS.PRIORITY: return getGroupByPriorityConfig(tickets);
    case GROUP_OPTIONS.USER: return getGroupByUserConfig(tickets, users);
  }
}
