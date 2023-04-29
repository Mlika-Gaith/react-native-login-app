import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 3,
  },

  // PRIMARY BUTTON
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  // SECONDARY BUTTON
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  // TERTIARY BUTTON
  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray',
  },
  text_SECONDARY: {
    color: 'gray',
  },
});
