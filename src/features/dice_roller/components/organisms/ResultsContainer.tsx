import {FC} from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {useRolls, useRollsDispatch} from '../../../../core/contexts/useRoller';
import ResultsCard from './ResultsCard';

const ResultsContainer: FC = () => {
  const rolls = useRolls();
  const dispatch = useRollsDispatch();

  return (
    <>
      <ScrollView style={styles.body}>
        {rolls.results.length ? (
          <ResultsCard />
        ) : (
          <Text style={styles.card}>Choose what to roll</Text>
        )}
      </ScrollView>
      <Pressable
        onPress={() => dispatch({type: 'roll_dice'})}
        style={styles.floatingAction}>
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
    height: 150,
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
