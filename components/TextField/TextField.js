import React from 'react';
import { TextInput } from 'react-native';

const TextField = ({
  value,
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
  autoFocus = false,
  onFocus,
  onBlur,
  style,
}) => {
  const baseStyle = {
    marginTop: 10,
    borderColor: 'gray',
    marginHorizontal: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  };

  return (
    <TextInput
      style={[baseStyle, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoFocus={autoFocus}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default TextField;
