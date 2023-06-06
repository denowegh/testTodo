import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import MainScreen from "./app/auth/main"

import { NavigationContainer } from '@react-navigation/native';
import { store,persistor } from "./app/redux/store/TodosStore";

export default  function App() {
  
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

