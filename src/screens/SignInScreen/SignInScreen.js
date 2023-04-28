import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/dev-logo.png';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
    </View>
  );
};

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
    resizeMode: 'contain',
  },
});

export default SignInScreen;
