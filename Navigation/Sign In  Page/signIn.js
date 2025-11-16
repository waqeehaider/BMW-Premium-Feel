import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { useState } from 'react';
import CustomButton from '../../components/Buttons/Button';
import Logo from '../../components/Logo/Logo';
import { Heading, Title } from '../../components/Texts/Text';
import TextField from '../../components/TextField/TextField';
import { sendUsername } from '../..Post/API_DATA/MockData/Post';
function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [autoFocus, setAutoFocus] = useState(false);
  const [response, setResponse] = useState('');

  const [errorUserName, setErrorUserName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  // wrapper that uses the shared network function
  const handleLogin = async () => {
    let hasError = false;

    if (!name) {
      setErrorUserName(true);
      hasError = true;
    } else {
      setErrorUserName(false);
    }

    if (!password) {
      setErrorPassword(true);
      hasError = true;
    } else {
      setErrorPassword(false);
    }

    if (hasError) return; // ⛔ stop here

    try {
      const data = await sendUsername(name, password);
      console.log('Response:', data);
      setResponse(JSON.stringify(data));
    } catch (err) {
      console.error(err);
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
        {errorUserName ? (
          <Text style={{ marginLeft: 40, marginTop: 10, color: 'red' }}>
            please enter valid username
          </Text>
        ) : null}

        <TextField
          style={{ marginTop: 25 }}
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="Password"
          secureTextEntry={true}
          onFocus={() => setAutoFocus(true)}
          onBlur={() => setAutoFocus(false)}
        />
        {errorPassword ? (
          <Text style={{ marginLeft: 40, marginTop: 10, color: 'red' }}>
            please enter password *
          </Text>
        ) : null}
      </View>
      <View
        style={{
          marginTop: 25,
          alignItems: 'center',
          //   flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <CustomButton onPress={handleLogin} title={'Login'} bgColor="#81C4FF" />
        <CustomButton title={'Sign Up'} bgColor="lightblue" />
      </View>
      <View style={{ marginTop: 25, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>
          Sign Up for new account , Forgot Password?
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
