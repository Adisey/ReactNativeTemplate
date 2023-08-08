import { GetState, SetState, create } from 'zustand';
import { useEffect } from 'react';

interface ITestCalcValueState {
  count: number;
  // ------------ 2 ------------
  count2: number;
}
interface ITestCalcActionsState {
  setInc: () => void;
  setDec: () => void;
  // ------------ 2 ------------
  setInc2: () => void;
  setDec2: () => void;
  setCount2: (n: number) => void;
}

interface ITestCalcState extends ITestCalcValueState, ITestCalcActionsState {}

export const useTestCalcStore = create<ITestCalcState>()(
  (set: SetState<ITestCalcValueState>, get: GetState<ITestCalcValueState>) => ({
    count: 7,
    setInc: () =>
      set((state: ITestCalcValueState) => ({ count: state.count + 1 })),
    setDec: () =>
      set((state: ITestCalcValueState) => ({ count: state.count - 1 })),
    // ------------ 2 ------------
    count2: 9,
    setInc2: () =>
      set((state: ITestCalcValueState) => ({ count2: state.count2 + 1 })),
    setDec2: () =>
      set(() => {
        const val = get().count2 - 1;
        return {
          count2: val,
        };
      }),
    setCount2: (n: number) => set(() => ({ count2: n })),
  }),
);
interface ITestCalcHook extends ITestCalcValueState {
  countCalc: number;
}

export const useTestCalcHook = (): ITestCalcHook => {
  const store = useTestCalcStore();
  const { count } = store;
  const countCalc = count * 5;

  useEffect(() => {
    console.log(Date.now(), `--(RUN Watchers)- count ->`, count);
    if (count === 10) {
      console.log(Date.now(), `--(RUN Watchers)- set count2 ->`, count);
      store.setCount2(count);
    }
  }, [count]);

  return { ...store, countCalc };
};

// ToDo: 08.08.2023 - think about mate more elegant
export const testCalcMiddleWare = (): ITestCalcActionsState => {
  return useTestCalcStore();
};
