export const ADD_PROGRESSIVE_COLUMN = "ADD_PROGRESSIVE_COLUMN";
export const REMOVE_PROGRESSIVE_COLUMN = "REMOVE_PROGRESSIVE_COLUMN";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const ADD_TICKET = "CREATE_TICKET";

export const addProgressiveColumn = (column) => ({
  type: ADD_PROGRESSIVE_COLUMN,
  payload: column
});

export const removeProgressiveColumn = (column) => ({
  type: REMOVE_PROGRESSIVE_COLUMN,
  payload: column
});

export const changeTitle = (index, newTitle) => ({
  type: CHANGE_TITLE,
  payload: { index, newTitle }
});

export const addTicket = (ticket) => ({
  type: ADD_TICKET,
  payload: ticket
});
