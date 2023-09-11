import {
  ADD_PROGRESSIVE_COLUMN,
  CHANGE_TITLE,
  REMOVE_PROGRESSIVE_COLUMN
} from "../actions/taskActions";

const initialState = [
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "Story",
    ticket: {}
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "To Do",
    ticket: {}
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "In Progress",
    ticket: {}
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "To verify",
    ticket: {}
  },
  {
    id: `${Math.random(10)}-${Math.random(10)}`,
    title: "Done",
    ticket: {}
  }
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRESSIVE_COLUMN: {
      return [...state, action.payload];
    }
    case CHANGE_TITLE: {
      const { index, newTitle } = action.payload;
      return state.map((colomn) =>
        colomn.id == index ? { ...colomn, title: newTitle } : colomn
      );
    }
    case REMOVE_PROGRESSIVE_COLUMN:
      return state.filter(({ id }) => id != action.payload);

    default:
      return state;
  }
};

export default taskReducer;
