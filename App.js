import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { useState } from 'react';
import CustomButton from './components/Buttons/Button';
import Logo from './components/Logo/Logo';
import { Heading, Title } from './components/Texts/Text';
import TextField from './components/TextField/TextField';
import { sendUsername } from './API_DATA/MockData/Post';
function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [autoFocus, setAutoFocus] = useState(false);
  const [response, setResponse] = useState('');

  // wrapper that uses the shared network function
  const handleLogin = async () => {
    try {
      const data = await sendUsername(name, password);
      console.log('Response from server:', data);
      setResponse(JSON.stringify(data));
    } catch (error) {
      console.error('Error sending data:', error);
      setResponse('Error sending data');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#363333ff' }}>
      {!autoFocus && <Logo />}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <Heading letter="B" color="#E7222E" />
        <Heading letter="M" color="#16588E" />
        <Heading letter="W" color="#81C4FF" />
      </View>
      <Title />
      <View style={{ marginTop: 20 }}>
        <TextField
          value={name}
          onChangeText={value => setName(value)}
          placeholder="user name"
          onFocus={() => setAutoFocus(true)}
          onBlur={() => setAutoFocus(false)}
        />

        <TextField
          style={{ marginTop: 40 }}
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="Password"
          secureTextEntry={true}
          onFocus={() => setAutoFocus(true)}
          onBlur={() => setAutoFocus(false)}
        />
      </View>
      <View
        style={{
          marginHorizontal: 40,
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <CustomButton
          onPress={handleLogin}
          title={'Login'}
          bgColor="#81C4FF"
        />
        <CustomButton title={'Sign Up'} bgColor="lightblue" />
      </View>
      <View
        style={{ marginHorizontal: 40, marginTop: 40, alignItems: 'center' }}
      >
        <Text style={{ color: 'white' }}>
          Sign Up for new account , Forgot Password?
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
