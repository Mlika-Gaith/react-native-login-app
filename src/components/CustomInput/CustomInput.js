import {StyleSheet, View, TextInput, Text} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      // this the rules to be respected for this input
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              placeholder={placeholder}
              style={styles.input}
              placeholderTextColor={'#e3e3e3'}
              onChangeText={onChange}
              onBlur={onBlur}
              // for password typing to be hidden
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.errorMessage}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  input: {
    color: 'black',
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'stretch',
  },
});
