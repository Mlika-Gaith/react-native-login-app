import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.homeText}>
        The magic thing about home is that it feels good to leave, and it feels
        even better to come back.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 24,
    alignItems: 'center',
    color: 'black',
    textTransform: 'capitalize',
  },
});
export default Home;
