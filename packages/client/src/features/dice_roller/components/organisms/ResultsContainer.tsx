import {FC} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRolls} from '../../../../core/contexts/useRoller';
import {ResultsCard} from '../molecules';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const ResultsContainer: FC<Props> = ({navigation}) => {
  const rolls = useRolls();

  return (
    <>
      <View>
        <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
      </View>
      <ScrollView style={styles.body}>
        {rolls.length ? (
          rolls.map((roll, index) => {
            return <ResultsCard key={index} roll={roll} />;
          })
        ) : (
          <Text style={styles.card}>Welcome to Keep on Rolling</Text>
        )}
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
    color: 'white',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default ResultsContainer;
