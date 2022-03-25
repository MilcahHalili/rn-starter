import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Milcah'

  return (
    <View>
      <Text style={styles.header}>This is the components screen</Text>
      <Text style={styles.subheader}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subheader: {
    fontSize: 20
  }
})

export default ComponentsScreen