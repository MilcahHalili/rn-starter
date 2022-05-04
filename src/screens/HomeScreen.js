import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>Hi, there!</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
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