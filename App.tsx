import type {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {ScaffoldPage} from './src/core/pages';
import {RollsProvider} from './src/core/contexts/useRoller';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = () => {
  return (
    <NavigationContainer>
      <RollsProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <ScaffoldPage />
        </SafeAreaView>
      </RollsProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
