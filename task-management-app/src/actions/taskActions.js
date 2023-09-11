export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const CHANGE_TITLE = "CHANGE_TITLE";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  payload: task
});

export const changeTitle = (index, newTitle) => ({
  type: CHANGE_TITLE,
  payload: { index, newTitle }
});
