import type {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {ScaffoldPage} from './src/core/pages';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScaffoldPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
