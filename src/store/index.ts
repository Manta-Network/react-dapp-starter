import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

import {
  createHome,
  type Home,
  createGlobalState,
  type GlobalState
} from '@/models';

import createSelectors from './createSelectors';

const useBoundStore = create<GlobalState & Home>()(
  subscribeWithSelector(
    devtools((...a) => ({
      ...createGlobalState(...a),
      ...createHome(...a)
    }))
  )
);

const useStore = createSelectors(useBoundStore);
export default useStore;
