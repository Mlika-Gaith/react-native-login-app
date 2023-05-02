/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onConfirmPressed = data => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.log('Resend Code.');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Confirmation Code"
          name={'code'}
          control={control}
          rules={{
            required: 'Confirmation code is required',
          }}
        />
        <CustomButton
          text={'Confirm'}
          onPress={handleSubmit(onConfirmPressed)}
        />
        <CustomButton
          onPress={onResendPressed}
          text={'Resend Code'}
          type="SECONDARY"
        />
        <CustomButton
          onPress={onSignInPressed}
          text={'Back to Sign in'}
          type="SECONDARY"
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

export default ConfirmEmailScreen;
