import create, { State, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { generateId } from './helpers';

interface Task {
  id: string;
  title: string;
  createdAt: number;
  color: string; 
}

interface ToDoStore {
  modalVisible: boolean;
  toEdited: boolean;
  taskColor : string;
  editItemId: string;
  setEditItemId: (id: string) => void;

  setModalVisible: () => void;
  setToEdit: () => void;
  setTaskColor :(color : string) => void 
  setResetColorTask : () => void
  tasks: Task[];
  createTask: (title: string, color: string) => void;
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

export const useTodoStore = create<ToDoStore>(
  localStorageUpdate(
    devtools((set, get) => ({
      modalVisible: false,
      editItemId: '',
      toEdited: false,
      color: '',
      taskColor: '',
      tasks: currentState,

      setEditItemId(id) {
        set((state) => ({ ...state, editItemId: id }));
      },

      setTaskColor(color) { 
        set((state) => ({ taskColor: color}));
      },

      setResetColorTask() {
        set(state => ({taskColor : ''}) )
      },
      setModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible })),
      setToEdit: () => {
        set((state) => ({ toEdited: !state.toEdited }));
      },
      createTask: (title, color) => {
        const { tasks } = get();
        const newTask = {
          id: generateId(),
          title: title,
          createdAt: Date.now(),
          color: color
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
    })),
  ),
);
