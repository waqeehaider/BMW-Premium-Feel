import React from 'react';
import { Text } from 'react-native';

const Heading = ({ letter, color }) => {
  return (
    <Text
      style={{
        fontSize: 44,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: color, // use the prop here
      }}
    >
      {letter} {/* use the prop here */}
    </Text>
  );
};

export default Heading;
