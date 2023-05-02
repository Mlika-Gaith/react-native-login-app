/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  let pwd = watch('password');
  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Confirmation Code"
          control={control}
          name="code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />
        <CustomInput
          placeholder="New Password"
          control={control}
          name={'password'}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          placeholder="Confirm Password"
          control={control}
          name={'confirm-password'}
          secureTextEntry={true}
          rules={{
            validate: value => value === pwd || "Passwords don't match",
          }}
        />
        <CustomButton
          onPress={handleSubmit(onConfirmPressed)}
          text={'Confirm'}
        />
        <CustomButton
          onPress={onSignInPressed}
          text={'Back to Sign in'}
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

export default ResetPasswordScreen;
