import {useState} from 'react';
import {useRollsDispatch} from '../../../core/contexts/useRoller';

export const useDiceForm = () => {
  const [count, setCount] = useState<string>();
  const [dice, setDice] = useState<string>();
  const [modifier, setModifier] = useState<string>();
  const [error, setError] = useState<string>();

  const dispatch = useRollsDispatch();

  const isCountValid = (countString: string) => {
    return /^([1-9]|1[0-9]|20)$/g.test(countString);
  };

  const isModifierValid = (modifierString: string) => {
    return /^-?\d+$/g.test(modifierString);
  };

  const handleCountChange = (value: string) => setCount(value);

  const handleCountSubmit = (value: string) => {
    if (!isCountValid(value)) {
      setError('Enter number between 1 and 20');
    } else {
      setError(undefined);
      setCount(value);
    }
  };

  const handleDiceSubmit = (value: string) => setDice(value);

  const handleModifierChange = (value: string) => setModifier(value);

  const handleModifierSubmit = (value: string) => {
    setError(undefined);

    if (!isModifierValid(value)) {
      setError('Enter positive/negative number');
    } else {
      setModifier(value);
    }
  };

  const handleAddSet = () => {
    if (!count || !dice || !modifier) {
      setError('Complete dice selection');
      return;
    }

    if (!isCountValid(count) || !isModifierValid(modifier)) {
      setError('Complete dice selection');
    } else {
      dispatch({
        type: 'add_set',
        count: parseInt(count, 10),
        dice: parseInt(dice, 10),
        modifier: parseInt(modifier, 10),
      });
    }
  };

  return {
    count,
    handleCountChange,
    handleCountSubmit,
    dice,
    handleDiceSubmit,
    modifier,
    handleModifierChange,
    handleModifierSubmit,
    error,
    handleAddSet,
  };
};
