import { ADD_TASK, DEL_TASK, MOVE_UP_TASK, MOVE_DOWN_TASK } from "./ActionType";

export const addTaskAction = name => ({
  type: ADD_TASK,
  payload: name
});
export const delTaskAction = id => ({
  type: DEL_TASK,
  payload: id
});
export const moveUpTaskAction = id => ({
  type: MOVE_UP_TASK,
  payload: id
});
export const moveDownTaskAction = name => ({
  type: MOVE_DOWN_TASK,
  payload: name
});
