import {FC} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '../molecules';
import {useRollsDispatch} from '../../../../core/contexts/useRoller';
import {useDiceForm} from '../../hooks/useDiceForm';

const DiceForm: FC = () => {
  const formState = useDiceForm();
  const dispatch = useRollsDispatch();

  return (
    <View style={styles.container}>
      {formState.error ? (
        <Text style={styles.error}>{formState.error}</Text>
      ) : null}
      <TextInput
        style={styles.unit}
        placeholder="Number of dice"
        keyboardType="numeric"
        textAlign="center"
        maxLength={2}
        value={formState.count}
        onChangeText={formState.handleCountChange}
        onSubmitEditing={() => {
          if (!formState.count) {
            return;
          }
          formState.handleCountSubmit(formState.count);
        }}
      />
      <Picker
        style={styles.unit}
        value={formState.dice ? `D${formState.dice}` : 'Dice'}
        setValue={formState.handleDiceSubmit}
      />
      <TextInput
        style={styles.unit}
        placeholder="Modifier"
        keyboardType="numeric"
        textAlign="center"
        maxLength={3}
        value={formState.modifier}
        onChangeText={formState.handleModifierChange}
        onSubmitEditing={() => {
          if (!formState.modifier) {
            return;
          }
          formState.handleModifierSubmit(formState.modifier);
        }}
      />
      <Pressable
        style={[styles.floatingAction, styles.floatingActionRoll]}
        onPress={() => dispatch({type: 'roll_dice'})}>
        <Text style={styles.floatingActionText}>Roll</Text>
      </Pressable>
      <Pressable
        style={[styles.floatingAction, styles.floatingActionAdd]}
        onPress={formState.handleAddSet}>
        <Text style={styles.floatingActionText}>Add</Text>
      </Pressable>
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
  floatingAction: {
    flex: 1,
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    right: 20,
  },
  floatingActionText: {
    color: 'white',
    textAlign: 'center',
  },
  floatingActionRoll: {
    bottom: 130,
  },
  floatingActionAdd: {
    bottom: 250,
  },
});

export default DiceForm;
