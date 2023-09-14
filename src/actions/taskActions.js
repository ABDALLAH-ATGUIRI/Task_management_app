export const ADD_PROGRESSIVE_COLUMN = "ADD_PROGRESSIVE_COLUMN";
export const REMOVE_PROGRESSIVE_COLUMN = "REMOVE_PROGRESSIVE_COLUMN";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const ADD_TICKET = "CREATE_TICKET";
export const REMOVE_TICKET = "REMOVE_TICKET";
export const CHANGE_TICKET_CONTENT = "CHANGE_TICKET_CONTENT";
export const CHANGE_PROGRESSIVE_OF_TICKET = "CHANGE_PROGRESSIVE_OF_TICKET";

export const addProgressiveColumn = () => ({
  type: ADD_PROGRESSIVE_COLUMN,
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

export const removeTicket = (parentId, id) => ({
  type: REMOVE_TICKET,
  payload: { parentId, id }
});

export const changeTicketContent = (id, newContent) => ({
  type: CHANGE_TICKET_CONTENT,
  payload: { id, newContent }
});

export const changeProgressiveOfTicket = (ticket, newProgressiveId) => ({
  type: CHANGE_PROGRESSIVE_OF_TICKET,
  payload: { ticket, newProgressiveId }
});