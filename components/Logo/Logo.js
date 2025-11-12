import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      source={require('../../assets/images/CarBM.png')}
      style={{
        width: 300,
        height: 250,
        alignSelf: 'center',
        marginTop: 30,
      }}
    />
  );
};

export default Logo;
