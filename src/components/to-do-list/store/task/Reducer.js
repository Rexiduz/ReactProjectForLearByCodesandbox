import { ADD_TASK, DEL_TASK, MOVE_UP_TASK, MOVE_DOWN_TASK } from "./actionType";

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        id: Number.parseInt(Math.random() * 10000, 10).toString(),
        name: action.payload
      };
      return state.concat(newTask);
    }
    case DEL_TASK: {
      const id = action.payload;
      return state.filter(task => task.id !== id);
    }
    case MOVE_UP_TASK: {
      const id = action.payload;
      const index = state.findIndex(({ id: taskId }) => taskId === id);
      // Handle case
      if (index === 0) {
        return state;
      } else {
        const newTasks = [...state]; //all data of prevState
        newTasks[index] = state[index - 1];
        newTasks[index - 1] = state[index];
        return newTasks;
      }
    }
    case MOVE_DOWN_TASK: {
      const id = action.payload;
      const index = state.findIndex(({ id: taskId }) => taskId === id);
      // Handle case
      if (index === state.length - 1) {
        return state;
      } else {
        const newTasks = [...state]; //all data of prevState
        newTasks[index] = state[index + 1];
        newTasks[index + 1] = state[index];
        return newTasks;
      }
    }

    default:
      return state;
  }
};

export default taskReducer;
