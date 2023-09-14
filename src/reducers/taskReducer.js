import {
  ADD_PROGRESSIVE_COLUMN,
  CHANGE_TITLE,
  REMOVE_PROGRESSIVE_COLUMN,
  ADD_TICKET,
  REMOVE_TICKET,
  CHANGE_TICKET_CONTENT,
  CHANGE_PROGRESSIVE_OF_TICKET
} from "../actions/taskActions";

const initialState = [
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "Story",
    tickets: []
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "To Do",
    tickets: []
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "In Progress",
    tickets: []
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "To verify",
    tickets: []
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "Done",
    tickets: []
  }
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRESSIVE_COLUMN: {
      return [
        ...state,
        { id: `${Math.random(10)}-${Math.random(10)}`, title: "", tickets: [] }
      ];
    }
    case CHANGE_TITLE: {
      const { index, newTitle } = action.payload;
      return state.map((column) =>
        column.id == index ? { ...column, title: newTitle } : column
      );
    }
    case REMOVE_PROGRESSIVE_COLUMN: {
      return state.filter(({ id }) => id != action.payload);
    }
    case ADD_TICKET: {
      const ticket = action.payload;

      return state.map((column) =>
        column.id == ticket.parentId
          ? { ...column, tickets: [...column.tickets, ticket] }
          : column
      );
    }
    case REMOVE_TICKET: {
      const { parentId, id } = action.payload;

      return state.map((column) => {
        if (column.id == parentId) {
          return {
            ...column,
            tickets: column.tickets.filter((ticket) => ticket.id != id)
          };
        } else {
          return column;
        }
      });
    }
    case CHANGE_TICKET_CONTENT: {
      const { parentId, id, newContent } = action.payload;

      return state.map((column) => {
        if (column.id == parentId) {
          return {
            ...column,
            tickets: column.tickets.map((ticket) =>
              ticket.id == id ? { ...ticket, newContent } : ticket
            )
          };
        } else {
          return column;
        }
      });
    }
    case CHANGE_PROGRESSIVE_OF_TICKET: {
      const { ticket, newProgressiveId } = action.payload;

      if (newProgressiveId == ticket.parentId) return state;

      return state.map((column) => {
        if (column.id == newProgressiveId) {
          column.tickets.push({ ...ticket, parentId: newProgressiveId });
        }

        if (column.id == ticket.parentId) {
          return {
            ...column,
            tickets: column.tickets.filter(({ id }) => ticket.id != id)
          };
        }

        return column;
      });
    }
    default:
      return state;
  }
};

export default taskReducer;
