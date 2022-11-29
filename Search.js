//Components/Search.js

import React from 'react'
import {View, TextInput, Button} from 'react-native'

class  Search extends React.Component {
  render() {
    return (
      //<View style={{marginTop: 20 }}>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'yellow'}}>
      <View style={{ height: 50, width:50, backgroundColor: 'red'}}></View>
      <View style={{ height: 50, width:50, backgroundColor: 'green'}}></View>
      <View style={{ height: 50, width:50, backgroundColor: 'blue'}}></View>

      <TextInput placeholder='Titre du film'/>

      <Button title='rechercher' onPress={()=>{}}/>
      </View>
      //</View>
    )
  }
}
export default Search
