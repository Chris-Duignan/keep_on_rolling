import {FC, ReactNode, createContext, useContext, useReducer} from 'react';
import type {Dispatch} from 'react';
import {rollDice} from '../utils';

type RollsState = {
  count: number | null;
  dice: number | null;
  modifier: number | null;
  errors: string;
  results: number[];
};

type RollsAction =
  | {type: 'set_count'; countString: string}
  | {type: 'set_dice'; diceString: string}
  | {type: 'set_modifier'; modifierString: string}
  | {type: 'roll_dice'}
  | {type: 'add_error'; errorMessage: string};

const rollsReducer = (state: RollsState, action: RollsAction): RollsState => {
  switch (action.type) {
    case 'set_count':
      const newCountState = {...state};
      newCountState.count = null;
      newCountState.results = [];

      if (/\D/g.test(action.countString)) {
        newCountState.errors = 'Enter number between 1 and 20';
        return newCountState;
      }

      const parsedCount = parseInt(action.countString, 10);

      if (parsedCount < 1 || parsedCount > 20) {
        newCountState.errors = 'Number between 1 and 20';
        return newCountState;
      }

      newCountState.count = parsedCount;
      return newCountState;

    case 'set_dice':
      const newDiceState = {...state};
      newDiceState.results = [];

      const parsedDice = parseInt(action.diceString, 10);

      newDiceState.dice = parsedDice;

      return newDiceState;

    case 'set_modifier':
      const newModifierState = {...state};
      newModifierState.modifier = null;
      newModifierState.results = [];

      if (!/^-?\d+$/g.test(action.modifierString)) {
        newModifierState.errors = 'Enter a positive/negative number';
      }

      const parsedModifier = parseInt(action.modifierString, 10);

      newModifierState.modifier = parsedModifier;
      return newModifierState;

    case 'roll_dice':
      const newResultState = {...state};
      newResultState.results = [];

      if (
        !newResultState.count ||
        !newResultState.dice ||
        !newResultState.modifier
      ) {
        newResultState.errors = 'Please complete dice selection';
        return newResultState;
      }

      for (let i = 0; i < newResultState.count; i++) {
        newResultState.results.push(rollDice(newResultState.dice));
      }

      return newResultState;

    case 'add_error':
      const newErrorState = {...state};

      newErrorState.errors = action.errorMessage;

      return newErrorState;

    default:
      return {...state};
  }
};

export const RollContext = createContext<null | RollsState>(null);
export const RollDispatchContext = createContext<null | Dispatch<RollsAction>>(
  null,
);

const createInitialState = (): RollsState => {
  return {
    count: null,
    dice: null,
    modifier: null,
    errors: '',
    results: [],
  };
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
