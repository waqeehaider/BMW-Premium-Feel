const TextField = () => {
  return (
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
  );
};

export default TextField;
