import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as LocalAuthentication from 'expo-local-authentication';
import {selectUserState, setAuthenticated} from "../store/user";
import styles from "./styles/AuthenticationStyle";

const AuthenticationScreen = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {login: savedLogin, password: savedPassword} = useSelector(selectUserState);

  const handleRegistration = () => {
    // Comparing entered login and password with saved values
    if (login === savedLogin && password === savedPassword) {
      dispatch(setAuthenticated(true));
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
    } else {
      dispatch(setAuthenticated(false));
      Alert.alert('Error', 'Failed to log in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={login}
        onChangeText={text => setLogin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleRegistration} />
      </View>
      <Button title="Authenticate with Biometric Data" onPress={handleAuthentication} />
    </View>
  );
};

export default AuthenticationScreen;

