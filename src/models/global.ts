import { type StateCreator } from 'zustand';

export interface GlobalState {
  isMobileDevice: boolean;
  setIsMobileDevice: (isMobileDevice: boolean) => void;
}

export const createGlobalState: StateCreator<
  GlobalState,
  [['zustand/subscribeWithSelector', never], ['zustand/devtools', never]],
  [],
  GlobalState
> = set => ({
  isMobileDevice: false,
  setIsMobileDevice: isMobileDevice =>
    set(() => ({ isMobileDevice }), false, 'setIsMobileDevice')
});
