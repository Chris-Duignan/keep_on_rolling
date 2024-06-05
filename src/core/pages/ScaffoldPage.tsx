import {FC} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';

const ScaffoldPage: FC = () => {
  return <KeyboardAvoidingView style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScaffoldPage;
