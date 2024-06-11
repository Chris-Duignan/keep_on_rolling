import {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '../molecules';
import {useRolls, useRollsDispatch} from '../../../../core/contexts/useRoller';

const DiceForm: FC = () => {
  const [count, setCount] = useState<string>();
  const [modifier, setModifier] = useState<string>();

  const rolls = useRolls();
  const dispatch = useRollsDispatch();

  return (
    <View style={styles.container}>
      {rolls.errors.map((value, index) => {
        return (
          <Text key={`error-${index}`} style={styles.error}>
            {value}
          </Text>
        );
      })}
      <TextInput
        style={styles.unit}
        placeholder="Number of dice"
        keyboardType="numeric"
        textAlign="center"
        maxLength={2}
        value={count}
        onChangeText={text => setCount(text)}
        onSubmitEditing={() => {
          if (!count) {
            return;
          }
          dispatch({type: 'set_count', countString: count});
        }}
      />
      <Picker
        style={styles.unit}
        value={rolls.dice ? `D${rolls.dice}` : 'Dice'}
        setValue={(value: string) => {
          dispatch({type: 'set_dice', diceString: value});
        }}
      />
      <TextInput
        style={styles.unit}
        placeholder="Modifier"
        keyboardType="numeric"
        textAlign="center"
        maxLength={3}
        value={modifier}
        onChangeText={text => setModifier(text)}
        onSubmitEditing={() => {
          if (!modifier) {
            return;
          }
          dispatch({type: 'set_modifier', modifierString: modifier});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 75,
  },
  unit: {
    flex: 1,
  },
  error: {position: 'absolute', top: -41, padding: 10, backgroundColor: 'red'},
});

export default DiceForm;
