/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/dev-logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  // handleSubmit makes sure our form fields are all valid
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignInPressed = data => {
    // validate user
    console.log(data);
    //navigation.navigate('Home');
  };
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
        <CustomInput
          placeholder="Username"
          control={control}
          name="username"
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          placeholder="Password"
          control={control}
          name="password"
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          onPress={handleSubmit(onSignInPressed)}
          text={'Sign In'}
        />
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
