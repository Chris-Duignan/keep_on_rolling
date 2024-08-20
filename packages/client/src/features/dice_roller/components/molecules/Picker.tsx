import {FC, useState} from 'react';
import type {ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  style: ViewStyle;
  value: string | null;
  setValue: (value: string) => void;
};

const buttons = ['2', '4', '6', '8', '10', '12', '20', '100'];

const Picker: FC<Props> = ({style, value, setValue}) => {
  const [active, setActive] = useState(false);

  const onToggleDrawer = () => {
    setActive(prev => !prev);
  };

  const onSelectValue = (face: string) => {
    setValue(face);
    setActive(false);
  };

  const activeStyle = {
    backgroundColor: active ? '#247BA0' : '#2d6c87',
  };

  return (
    <View style={[style, styles.container]}>
      <Pressable style={[styles.button, activeStyle]} onPress={onToggleDrawer}>
        <Text style={styles.buttonText}>{value}</Text>
      </Pressable>
      {active ? (
        <View style={styles.itemContainer}>
          {buttons.map((button, index) => (
            <Pressable
              style={styles.item}
              key={`b${index}`}
              onPress={() => onSelectValue(button)}>
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
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  itemContainer: {
    backgroundColor: '#247BA0',
    position: 'absolute',
    top: -320,
    height: 320,
    width: '100%',
  },
  item: {
    paddingVertical: 5,
    height: 40,
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Picker;
