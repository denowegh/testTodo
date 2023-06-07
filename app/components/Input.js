import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles/InputStyles';
import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';
const Input = (props) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onChangeText = (text) => {
    setText(text);
  };

  const onSubmitEditing = () => {
    const { onSubmitEditing } = props;
    
    if (!text) {
      return;
    }

    dispatch(onSubmitEditing({text, id: uuidv1()}));
    setText('');
  };

  const {
    placeholder,
    placeholderTextColor,
    selectionColor,
    underlineColorAndroid,
    maxLength,
    clearTextOnFocus,
    style,
  } = props;

  return (
    <TextInput
      style={style ? style : styles.input}
      value={text}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      selectionColor={selectionColor}
      underlineColorAndroid={underlineColorAndroid}
      maxLength={maxLength}
      clearTextOnFocus={clearTextOnFocus}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default Input;