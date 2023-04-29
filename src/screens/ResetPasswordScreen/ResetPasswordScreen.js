import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ResetPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const onConfirmPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="New Password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton onPress={onConfirmPressed} text={'Confirm'} />
        <CustomButton
          onPress={onConfirmPressed}
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
