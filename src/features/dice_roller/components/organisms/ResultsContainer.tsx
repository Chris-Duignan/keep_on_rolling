import {FC} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useRolls} from '../../../../core/contexts/useRoller';
import {ResultsCard} from '../molecules';

const ResultsContainer: FC = () => {
  const rolls = useRolls();

  return (
    <>
      <ScrollView style={styles.body}>
        {rolls.map((roll, index) => {
          return <ResultsCard key={index} roll={roll} />;
        })}
        <Text style={styles.card}>Choose what to roll</Text>
      </ScrollView>
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
});

export default ResultsContainer;
