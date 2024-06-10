import {FC, ReactNode, createContext, useReducer} from 'react';
import type {Dispatch} from 'react';

type RollsState = {
  count: number | null;
  dice: number | null;
  modifier: number | null;
  errors: string[];
};

type RollsAction =
  | {type: 'set_count'; countString: string}
  | {type: 'set_dice'; diceString: string}
  | {type: 'set_modifier'; modifierString: string};

const rollsReducer = (state: RollsState, action: RollsAction): RollsState => {
  switch (action.type) {
    case 'set_count':
      const newCountState = {...state};
      newCountState.count = null;
      newCountState.errors = [];

      if (/\D/g.test(action.countString)) {
        newCountState.errors.push('Enter number between 1 and 20');
        return newCountState;
      }

      const parsedCount = parseInt(action.countString, 10);

      if (parsedCount < 1 || parsedCount > 20) {
        newCountState.errors.push('Number between 1 and 20');
        return newCountState;
      }

      newCountState.count = parsedCount;
      return newCountState;

    case 'set_dice':
      const newDiceState = {...state};

      const parsedDice = parseInt(action.diceString, 10);

      newDiceState.dice = parsedDice;

      return newDiceState;

    case 'set_modifier':
      const newModifierState = {...state};
      newModifierState.modifier = null;
      newModifierState.errors = [];

      if (!/^-?\d+$/g.test(action.modifierString)) {
        newModifierState.errors.push('Enter a positive/negative number');
      }

      const parsedModifier = parseInt(action.modifierString, 10);

      newModifierState.modifier = parsedModifier;
      return newModifierState;

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
    errors: [],
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
