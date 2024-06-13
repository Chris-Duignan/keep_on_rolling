import {FC, ReactNode, createContext, useContext, useReducer} from 'react';
import type {Dispatch} from 'react';
import {rollDice} from '../utils';

export type RollsState = {
  count: number;
  dice: number;
  modifier: number;
  results: number[];
};

type RollsAction =
  | {
      type: 'add_set';
      count: number;
      dice: number;
      modifier: number;
    }
  | {type: 'roll_dice'};

const rollsReducer = (
  state: RollsState[],
  action: RollsAction,
): RollsState[] => {
  switch (action.type) {
    case 'add_set':
      const newSetState = state.map(val => {
        const newResults = [...val.results];
        return {...val, results: newResults};
      });

      newSetState.push({
        count: action.count,
        dice: action.dice,
        modifier: action.modifier,
        results: [],
      });

      return newSetState;

    case 'roll_dice':
      const rollState = state.map(val => {
        const newRolls: number[] = [];

        for (let i = 0; i < val.count; i++) {
          newRolls.push(rollDice(val.dice));
        }

        return {...val, results: newRolls};
      });

      return rollState;

    default:
      return [...state];
  }
};

export const RollContext = createContext<null | RollsState[]>(null);
export const RollDispatchContext = createContext<null | Dispatch<RollsAction>>(
  null,
);

const createInitialState = (): RollsState[] => {
  return [];
};

export const RollsProvider: FC<{children: ReactNode}> = ({children}) => {
  const [rolls, dispatch] = useReducer(rollsReducer, null, createInitialState);
  return (
    <RollContext.Provider value={rolls}>
      <RollDispatchContext.Provider value={dispatch}>
        {children}
      </RollDispatchContext.Provider>
    </RollContext.Provider>
  );
};

export const useRolls = () => {
  const rolls = useContext(RollContext);

  if (!rolls) {
    throw new Error('Must be used inside provider');
  }

  return rolls;
};

export const useRollsDispatch = () => {
  const dispatch = useContext(RollDispatchContext);

  if (!dispatch) {
    throw new Error('Must be used inside provider');
  }

  return dispatch;
};
