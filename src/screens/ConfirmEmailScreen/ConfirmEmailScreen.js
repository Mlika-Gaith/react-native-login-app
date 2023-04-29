import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const onConfirmPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
        />
        <CustomButton onPress={onConfirmPressed} text={'Confirm'} />
        <CustomButton
          onPress={onConfirmPressed}
          text={'Resend Code'}
          type="SECONDARY"
        />
        <CustomButton
          onPress={onConfirmPressed}
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
