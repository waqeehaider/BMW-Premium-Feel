import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      source={require('../../assets/images/carbody.png')}
      style={{
        width: 500,
        height: 200,
        alignSelf: 'center',
        marginTop: 30,
      }}
    />
  );
};

export default Logo;
