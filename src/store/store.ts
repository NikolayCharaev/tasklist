import { create } from 'zustand';

interface ITodoProps {
  modalVisible: boolean;
  setModalVisible: () => void;
}

export const useTodoStore = create<ITodoProps>((set) => ({
  modalVisible: false,
  setModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible })),
}));
