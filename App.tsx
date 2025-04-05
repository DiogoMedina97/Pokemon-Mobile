import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={DefaultTheme}>
        <StackNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
