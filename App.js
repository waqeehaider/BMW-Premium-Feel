import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import CustomButton from './components/Buttons/Button';
function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [response, setResponse] = useState('');

  const sendUsername = async () => {
    try {
      const res = await fetch('http://10.0.2.2:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });

      const data = await res.json();
      console.log('Response from server:', data);
      setResponse(`User ${data.username} added successfully!`);
    } catch (error) {
      console.error('Error sending data:', error);
      setResponse('Error sending data');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#363333ff' }}>
      <Image
        resizeMode="contain"
        source={require('./assets/images/CarBM.png')}
        style={{
          width: 300,
          height: 250,
          alignSelf: 'center',
          marginTop: 30,
          // backgroundColor: '#22321f',
        }}
      ></Image>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 44,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#E7222E',
          }}
        >
          B
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 44,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#16588E',
          }}
        >
          M
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 44,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#81C4FF',
          }}
        >
          W
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>
          Gives A High-Tech, Premium Feel.
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{
            marginTop: 20,
            borderColor: 'gray',
            marginHorizontal: 40,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          value={name}
          onChangeText={value => {
            setName(value);
            // console.log(value);
          }}
          autoFocus={true}
          placeholder="user name"
        ></TextInput>
        <TextInput
          style={{
            marginTop: 40,
            borderColor: 'gray',
            paddingVertical: 15,
            marginHorizontal: 40,
            borderWidth: 1,
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          value={password}
          onChangeText={value => {
            setPassword(value);
            // console.log(value);
          }}
          secureTextEntry={true}
          // autoFocus={true}
          placeholder="Password"
        ></TextInput>
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
          onPress={sendUsername}
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
