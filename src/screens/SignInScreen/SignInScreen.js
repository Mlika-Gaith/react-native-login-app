import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/dev-logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onForgotPassword = () => {};
  const onSignUpPressed = () => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
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
        <CustomButton onPress={onSignInPressed} text={'Sign In'} />
        <CustomButton
          onPress={onForgotPassword}
          text={'Forgot Password ?'}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          onPress={onSignUpPressed}
          text={"Don't have an account ? Create one"}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

// styles

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
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
