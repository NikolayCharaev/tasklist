import  create  from 'zustand';
import { devtools } from 'zustand/middleware';
import { generateId } from './helpers';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  modalVisible: boolean;
  setModalVisible: () => void;
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask?: (id: string, title: string) => void;
  removeTask?: (id: string) => void;
}

export const useTodoStore = create<ToDoStore>(
  devtools((set, get) => ({
    modalVisible: false,
    tasks: [],
    setModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible })),
    createTask: (title) => {
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
  })),
);
