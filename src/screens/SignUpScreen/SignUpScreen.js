/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-useless-escape */
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {
      // default value for email field input
      email: 'username@email-domain.com',
    },
  });
  // provide the name of the field to watch
  // this is for repeat password validation
  const pwd = watch('password');

  const onRegisterPressed = () => {
    // handle backend logic
    navigation.navigate('ConfirmEmail');
  };
  const onTermsOfUsePressed = () => {
    console.log('Terms of Service');
  };
  const onTermsOfPrivacyPressed = () => {
    console.log('Terms of Privacy');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Username"
          name={'username'}
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Username must be at least 5 characters long',
            },
            maxLength: {
              value: 15,
              message: 'Username should be max 15 characters',
            },
          }}
        />
        <CustomInput
          placeholder="Email"
          name={'email'}
          control={control}
          rules={{pattern: {value: EMAIL_REGEX, message: 'Email is not valid'}}}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          name={'password'}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          placeholder="Repeat Password"
          secureTextEntry={true}
          name={'repeatPassword'}
          control={control}
          rules={{
            // you can also use functions for validation
            validate: value => value === pwd || 'Passwords do not match',
          }}
        />
        <CustomButton
          onPress={handleSubmit(onRegisterPressed)}
          text={'Sign Up'}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            {' '}
            Terms of Use
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onTermsOfPrivacyPressed}>
            {' '}
            Privacy Policy
          </Text>
          .
        </Text>
        <SocialSignInButtons />
        <CustomButton
          onPress={onSignInPressed}
          text={'Have an account ? Sign In'}
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FBD075',
  },
});

export default SignUpScreen;
