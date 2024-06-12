import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRolls} from '../../../../core/contexts/useRoller';

const ResultsCard: FC = () => {
  const {results, count, modifier, dice} = useRolls();

  if (!count || !dice || !modifier) {
    return null;
  }

  const total = results.reduce((prev, current) => prev + current, 0) + modifier;
  const formula = `${count}D${dice}${modifier < 0 ? '' : '+'}${modifier}`;
  return (
    <View style={styles.card}>
      <Text style={styles.total}>{total}</Text>
      <View style={styles.detail}>
        <Text style={styles.titleText}>{formula}</Text>
        <Text style={styles.results}>{results.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    backgroundColor: 'darkgrey',
    borderRadius: 10,
  },
  total: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  detail: {
    flex: 3,
    justifyContent: 'center',
    borderLeftColor: 'lightgrey',
    borderLeftWidth: 1,
    height: '100%',
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  results: {fontSize: 16},
});

export default ResultsCard;
