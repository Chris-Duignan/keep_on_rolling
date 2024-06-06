import {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '../molecules';

const DiceForm: FC = () => {
  const [selectedFace, setSelectedFace] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.unit}
        placeholder="Number of dice"
        keyboardType="numeric"
        textAlign="center"
      />
      <Picker
        style={styles.unit}
        value={selectedFace}
        setValue={setSelectedFace}
      />
      <TextInput
        style={styles.unit}
        placeholder="Modifier"
        keyboardType="numeric"
        textAlign="center"
      />
      <Pressable style={styles.floatingAction}>
        <Text style={styles.floatingActionText}>Roll</Text>
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
  floatingAction: {
    flex: 1,
    position: 'absolute',
    top: -150,
    right: '5%',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  floatingActionText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default DiceForm;
