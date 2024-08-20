import {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '../molecules';
import {useRollsDispatch} from '../../../../core/contexts/useRoller';
import {useDiceForm} from '../../hooks/useDiceForm';

const DiceForm: FC = () => {
  const [active, setActive] = useState(true);

  const activeStyle = {
    right: active ? 0 : -70,
    backgroundColor: active ? '#247BA0' : '#2d6c87',
  };

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
        placeholderTextColor="white"
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
        placeholderTextColor="white"
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
        onPress={() => setActive(p => !p)}
        style={[styles.popout, activeStyle]}>
        <Text style={styles.tab}>{active ? '>' : '<'}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.floatingAction}
            onPress={() => dispatch({type: 'roll_dice'})}>
            <Text style={styles.floatingActionText}>Roll</Text>
          </Pressable>
          <Pressable
            style={styles.floatingAction}
            onPress={formState.handleAddSet}>
            <Text style={styles.floatingActionText}>Add</Text>
          </Pressable>
        </View>
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
    backgroundColor: '#2d6c87',
    color: 'white',
  },
  error: {
    position: 'absolute',
    top: -41,
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
  },
  floatingAction: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#96b5c3',
    width: 60,
    margin: 10,
    borderRadius: 10,
  },
  floatingActionText: {
    color: 'white',
    textAlign: 'center',
  },
  popout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 200,
    position: 'absolute',
    bottom: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tab: {
    color: 'white',
    fontSize: 20,
    width: 30,
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default DiceForm;
