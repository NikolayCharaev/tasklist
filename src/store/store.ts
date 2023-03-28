import create, { State, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { generateId } from './helpers';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  modalVisible: boolean;
  toEdited: boolean;

  editItemId : string;
  // setEditItemId : (id : string) => void;
  setEditItemId : (id : string) => void;


  setModalVisible: () => void;
  setToEdit: () => void;
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

function isTodoStore(object: any): object is ToDoStore {
  return 'tasks' in object;
}

const localStorageUpdate =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (nextState, ...args) => {
        if (isTodoStore(nextState)) {
          window.localStorage.setItem('tasks', JSON.stringify(nextState.tasks));
        }
        set(nextState, ...args);
      },
      get,
      api,
    );

const currentState = JSON.parse(window.localStorage.getItem('tasks') || '[]');

export const useTodoStore = create<ToDoStore>(localStorageUpdate(
  devtools((set, get) => ({
    modalVisible: false,
    editItemId : '',
    toEdited: false,
    tasks: currentState,

    setEditItemId(id) {
      set(state => ({...state, editItemId: id}));
    },


    setModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible })),
    setToEdit: () => {
      set((state) => ({ toEdited: !state.toEdited }));
    },
    createTask: (title: string) => {
      const { tasks } = get();
      const newTask = {
        id: generateId(),
        title: title,
        createdAt: Date.now(),
      };
      set({
        tasks: [newTask, ...tasks],
      });
    },
    removeTask: (id: string) => {
      const { tasks } = get();
      set({
        tasks: tasks.filter((elem) => elem.id !== id),
      });
    },
    updateTask: (taskId: string, title: string) => {
      const { tasks } = get();
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            title: title,
          };
        } else {
          return task;
        }
      });
      set({ tasks: updatedTasks });
    },
  }))),
);
