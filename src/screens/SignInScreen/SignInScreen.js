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

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onForgotPassword = () => {};
  const onSignInWithFacebook = () => {};
  const onSignInWithGoogle = () => {};
  const onSignInWithApple = () => {};
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
        <CustomButton
          onPress={onSignInWithFacebook}
          text={'Sign In with Facebook'}
          type="TERTIARY"
          bgColor={'#E7EAF4'}
          fgColor={'#4765A9'}
        />
        <CustomButton
          onPress={onSignInWithGoogle}
          text={'Sign In with Google'}
          type="TERTIARY"
          bgColor={'#FAE9EA'}
          fgColor={'#DD4D44'}
        />
        <CustomButton
          onPress={onSignInWithApple}
          text={'Sign In with Apple'}
          type="TERTIARY"
          bgColor={'#e3e3e3'}
          fgColor={'#363636'}
        />
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
