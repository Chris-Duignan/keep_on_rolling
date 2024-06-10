import type {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {ScaffoldPage} from './src/core/pages';
import {RollsProvider} from './src/core/contexts/useRoller';

const App: FC = () => {
  return (
    <RollsProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ScaffoldPage />
      </SafeAreaView>
    </RollsProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
