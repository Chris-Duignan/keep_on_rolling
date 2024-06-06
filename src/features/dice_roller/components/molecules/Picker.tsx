import {FC, useState} from 'react';
import type {ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  style: ViewStyle;
};

const buttons = ['2', '4', '6', '8', '10', '12', '20', '100'];

const Picker: FC<Props> = ({style}) => {
  const [active, setActive] = useState(false);
  const [selectedFace, setSelectedFace] = useState<string | null>(null);

  const onToggleDrawer = () => {
    setActive(prev => !prev);
  };

  const onSelectDice = (face: string) => {
    setSelectedFace(face);
    setActive(false);
  };

  return (
    <View style={[style, styles.container]}>
      <Pressable style={styles.button} onPress={onToggleDrawer}>
        <Text>{selectedFace ? `D${selectedFace}` : 'Dice'}</Text>
      </Pressable>
      {active ? (
        <View style={styles.itemContainer}>
          {buttons.map((button, index) => (
            <Pressable
              style={styles.item}
              key={`b${index}`}
              onPress={() => onSelectDice(button)}>
              <Text style={styles.text}>D{button}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgrey',
  },
  button: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  itemContainer: {
    backgroundColor: 'darkgrey',
    position: 'absolute',
    top: -240,
    height: 240,
    width: '100%',
  },
  item: {
    paddingVertical: 5,
    height: 30,
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  text: {
    textAlign: 'center',
  },
});

export default Picker;
