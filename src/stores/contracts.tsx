import { create } from 'zustand';

interface IState {
  register: () => void;
}

const useUserStore = create<IState>(set => ({
  register: () => {}
}));

export default useUserStore;
