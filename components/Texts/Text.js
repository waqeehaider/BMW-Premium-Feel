import React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react';

// Reusable Heading component
export const Heading = ({ letter, color }) => {
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

// Title component
export const Title = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>
        Gives A High-Tech, Premium Feel.
      </Text>
    </View>
  );
};
