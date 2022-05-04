import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi, there!</Text>
      <Button
        onPress={() => console.log('Button pressed!')}
        title='Go to Components Demo'
      />
      <TouchableOpacity onPress={() => console.log('Button pressed!')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;