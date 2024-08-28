import {FC} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {
  DiceForm,
  ResultsContainer,
} from '../../features/dice_roller/components/organisms';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ScaffoldPage: FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ResultsContainer}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
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
