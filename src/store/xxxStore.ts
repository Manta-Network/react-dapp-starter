import { create } from 'zustand';

interface LoginStepState {
  step: number;
  setStep: (_: number) => void;
}

const useLoginStepStore = create<LoginStepState>(set => ({
  step: 1,
  setStep: (step: number) => set({ step }),
}));

export default useLoginStepStore;
