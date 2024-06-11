import {FC} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {
  DiceForm,
  ResultsContainer,
} from '../../features/dice_roller/components/organisms';

const ScaffoldPage: FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ResultsContainer />
      <DiceForm />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScaffoldPage;
