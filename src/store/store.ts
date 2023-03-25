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
  toEdited: boolean
  setModalVisible: () => void;
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask?: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useTodoStore = create<ToDoStore>(
  devtools((set, get) => ({
    modalVisible: false,
    toEdited: false,
    tasks: [],
    setModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible })),
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
    updateTask: (id: string, title: string) => {
      const { tasks, toEdited } = get();
     
      set({
        toEdited: true,
        tasks: tasks.map((task) => ({
          ...task,
          title: task.id === id ? title : task.title,
        })),
      },
      );
      set({
        toEdited: false
      })
    },
  })),
);
