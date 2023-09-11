import { ADD_TASK, CHANGE_TITLE, REMOVE_TASK } from "../actions/taskActions";

const initialState = [
  {
    title: "Story",
    ticket: {}
  },
  {
    title: "To Do",
    ticket: {}
  },
  {
    title: "In Progress",
    ticket: {}
  },
  {
    title: "To verify",
    ticket: {}
  },
  {
    title: "Done",
    ticket: {}
  }
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, action.payload];
    }
    case CHANGE_TITLE: {
      const { index, newTitle } = action.payload;
      return state.map((task, taskIndex) =>
        taskIndex === index ? { ...task, title: newTitle } : task
      );
    }
    case REMOVE_TASK:
      return state.filter((el, index) => index != action.payload);

    default:
      return state;
  }
};

export default taskReducer;
