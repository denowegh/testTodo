import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as LocalAuthentication from 'expo-local-authentication';

import config from "../config/index";
import styles from "../components/styles/InputStyles";
import { setAuthenticated } from '../redux/actions/AuthActionCreators';

const AuthenticationScreen = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const savedLogin = useSelector(state => state.userReducer.login);
  const savedPassword = useSelector(state => state.userReducer.password);

  const handleRegistration = () => {
    // Comparing entered login and password with saved values
    if (login === savedLogin && password === savedPassword) {
      dispatch(setAuthenticated(true));
      Alert.alert('Success', 'You are logged in!');
    } else {
      dispatch(setAuthenticated(false));
      Alert.alert('Error', 'Failed to log in.');
    }
  };

  const handleAuthentication = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert('Authentication Unavailable', 'Device does not support or is not set up for local authentication.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();

    if (result.success) {
      dispatch(setAuthenticated(true));
      Alert.alert('Success', 'You are logged in!');
    } else {
      dispatch(setAuthenticated(false));
      Alert.alert('Error', 'Failed to log in.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: config.colors.dim_gray }}>
      <Text style={{ fontSize: 30 }}>Log In</Text>
      <TextInput
        style={{ ...styles.input, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, width: 300 }}
        placeholder="Username"
        value={login}
        onChangeText={text => setLogin(text)}
      />
      <TextInput
        style={{ ...styles.input, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, width: 300 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Log In" color={config.colors.dim_gray} onPress={handleRegistration} />
      <View style={{ height: 75 }} />
      <Button title="Authenticate with Biometric Data" color={config.colors.dim_gray} onPress={handleAuthentication} />
    </View>
  );
};

export default AuthenticationScreen;

