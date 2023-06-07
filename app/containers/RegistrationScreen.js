import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLogin, setPassword, setRegistered, setAuthenticated } from '../store/user';
import styles from "./styles/RegistrationStyle";

const RegistrationScreen = ({ onChangeAuthScreen }) => {
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
    dispatch(setAuthenticated(true));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={localLogin}
        onChangeText={text => setLocalLogin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={localPassword}
        onChangeText={text => setLocalPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegistration} />
      </View>
    </View>
  );
};

export default RegistrationScreen;
