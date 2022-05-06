import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageDetail = ({ title }) => {
  return <View>
    <Image
      source={require(`../../assets/${title.toLowerCase()}.jpg`)}
      styles={styles.image}
      style={{width: 200, height: 134}}
    />
    <Text>{title}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default ImageDetail