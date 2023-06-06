import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appReducer from '../reducers/AppReducer';

// Конфигурация для redux-persist
const persistConfig = {
  key: 'root', // Ключ, используемый для сохранения состояния в хранилище
  storage: AsyncStorage, // Хранилище для сохранения состояния (в данном случае AsyncStorage)
  // Дополнительные настройки, если необходимо
};

// Создание персистентного редюсера
const persistedReducer = persistReducer(persistConfig, appReducer);

// Создание Redux Store с персистентным редюсером
const store = createStore(persistedReducer);

// Создание персистора для восстановления состояния
const persistor = persistStore(store);

export { store, persistor };

