import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLogin, setPassword, setRegistered, setAuthenticated } from '../redux/actions/AuthActionCreators';
import * as LocalAuthentication from 'expo-local-authentication';

import config from "../config/index";
import styles from "../components/styles/InputStyles";


const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const [localLogin, setLocalLogin] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  const handleRegistration = () => {
    if (localLogin.trim() === '' || localPassword.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
  
    dispatch(setLogin(localLogin));
    dispatch(setPassword(localPassword));
    dispatch(setRegistered(true));
    dispatch(setAuthenticated(true));
  };

  const handleAuthentication = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert('Authentication Unavailable', 'Device does not support or is not configured for local authentication.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();

    if (result.success) {
      dispatch(setAuthenticated(true));
      Alert.alert('Success', 'You are registered!');
    } else {
      dispatch(setAuthenticated(false));
      Alert.alert('Error', 'Authentication failed.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: config.colors.dim_gray }}>
      <Text style={{ fontSize: 30 }}>Registration</Text>
      <TextInput
        style={{ ...styles.input, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, width: 300 }}
        placeholder="Username"
        value={localLogin}
        onChangeText={text => setLocalLogin(text)}
      />
      <TextInput
        style={{ ...styles.input, marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, width: 300 }}
        placeholder="Password"
        secureTextEntry={true}
        value={localPassword}
        onChangeText={text => setLocalPassword(text)}
      />
      <Button title="Register" color={config.colors.dim_gray} onPress={handleRegistration} />
      <View style={{ height: 75 }} />
      <Button title="Authenticate with Biometrics" color={config.colors.dim_gray} onPress={handleAuthentication} />
    </View>
  );
};

export default RegistrationScreen;
