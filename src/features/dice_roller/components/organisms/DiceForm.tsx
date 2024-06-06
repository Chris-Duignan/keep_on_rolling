import {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '../molecules';

const DiceForm: FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.unit}
        placeholder="Number of dice"
        keyboardType="numeric"
        textAlign="center"
      />
      <Picker style={styles.unit} />
      <TextInput
        style={styles.unit}
        placeholder="Modifier"
        keyboardType="numeric"
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 3,
  },
  unit: {
    flex: 1,
  },
});

export default DiceForm;
