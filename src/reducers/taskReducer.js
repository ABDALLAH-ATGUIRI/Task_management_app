import {
  ADD_PROGRESSIVE_COLUMN,
  CHANGE_TITLE,
  REMOVE_PROGRESSIVE_COLUMN,
  ADD_TICKET
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
      return [...state, action.payload];
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
      const { id, ticket } = action.payload;
      return state.map((column) =>
      column.id == id ? {...column , tickets: [...column.tickets, ticket ] }: column
      );
    }

    default:
      return state;
  }
};

export default taskReducer;
