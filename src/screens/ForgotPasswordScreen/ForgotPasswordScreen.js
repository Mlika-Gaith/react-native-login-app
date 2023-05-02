import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  navigation = useNavigation();
  const [code, setCode] = useState('');
  const onConfirmPressed = () => {
    navigation.navigate('ResetPassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput placeholder="Username" value={code} setValue={setCode} />
        <CustomButton onPress={onConfirmPressed} text={'Send'} />
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

export default ForgotPasswordScreen;
