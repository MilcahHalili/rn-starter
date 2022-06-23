import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const ListScreen = () => {
  const friends = [
    {name: 'Ramisha', age: '22'},
    {name: 'Fatima', age: '28'},
    {name: 'May', age: '44'},
    {name: 'Ashleigh', age: '32'},
    {name: 'Reyna', age: '36'},
    {name: 'Rhea', age: '40'},
    {name: 'Olive', age: '11'},
    {name: 'Jasmine', age: '24'},
    {name: 'Cee', age: '42'}
  ]
  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({item}) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 50
  }
})

export default ListScreen