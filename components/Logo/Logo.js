import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      source={require('../../assets/images/carbody.png')}
      style={{
        width: 700,
        height: 300,
        alignSelf: 'center',
        marginTop: 30,
      }}
    />
  );
};

export default Logo;
