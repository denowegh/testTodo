import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import MainScreen from "./app/auth/main";

import { store, persistor } from "./app/store";

export default function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
              <SafeAreaView style={{ flex: 1 }}>
                <MainScreen/>
              </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}



