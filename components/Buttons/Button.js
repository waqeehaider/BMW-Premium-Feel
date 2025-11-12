import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({
  title,
  bgColor = 'yellow',
  textColor = 'black',
  onPress,
  buttonStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: bgColor,
          width: 150,
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        },
        buttonStyle,
      ]}
    >
      <Text
        style={[
          {
            color: textColor,
            fontWeight: 'bold',
            fontSize: 15,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
