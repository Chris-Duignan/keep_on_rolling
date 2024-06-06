import {FC} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {DiceForm} from '../../features/dice_roller/components/organisms';

const ScaffoldPage: FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.body} />
      <DiceForm />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});

export default ScaffoldPage;
