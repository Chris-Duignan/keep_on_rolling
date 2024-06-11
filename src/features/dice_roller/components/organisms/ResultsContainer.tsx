import {FC} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRolls} from '../../../../core/contexts/useRoller';

const ResultsContainer: FC = () => {
  const rolls = useRolls();

  return (
    <>
      <ScrollView style={styles.body}>
        {rolls.results.length ? (
          rolls.results.map(roll => {
            return (
              <View style={styles.card}>
                <Text>{roll}</Text>
              </View>
            );
          })
        ) : (
          <Text style={styles.card}>Choose what to roll</Text>
        )}
      </ScrollView>
      <Pressable style={styles.floatingAction}>
        <Text style={styles.floatingActionText}>Roll</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 30,
  },
  card: {
    padding: 20,
    height: 200,
    backgroundColor: 'darkgrey',
    borderRadius: 10,
  },
  floatingAction: {
    flex: 1,
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    bottom: 130,
    right: 20,
  },
  floatingActionText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ResultsContainer;
