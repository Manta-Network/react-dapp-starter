import { type StateCreator } from 'zustand';

export enum HomeStep {
  default,
  eligible,
  notEligible
}

export interface Home {
  homeStep: HomeStep;
  setHomeStep: (homeStep: HomeStep) => void;
  queryStatus: () => Promise<boolean>;
}

export const createHome: StateCreator<
  Home,
  [['zustand/subscribeWithSelector', never], ['zustand/devtools', never]],
  [],
  Home
> = set => ({
  homeStep: HomeStep.default,
  queryStatus: async () => {
    const res = HomeStep.eligible; // mock fetch data
    set({ homeStep: res }, false, 'update the homeStep initially');
    return Promise.resolve(res === HomeStep.eligible);
  },
  setHomeStep: homeStep =>
    set({ homeStep }, false, 'update the homeStep manually')
});
