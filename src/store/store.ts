import create from 'zustand';
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
  setModalVisible: () => void;
  setToEdit: () => void;
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useTodoStore = create<ToDoStore>(
  devtools((set, get) => ({
    modalVisible: false,
    toEdited: false,
    tasks: [],
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
  })),
);
