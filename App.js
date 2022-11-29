import React from 'react';
import { Text,StyleSheet, View, Button,TextInput} from 'react-native'
import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.BlocP}>,

          <View style={styles.Bloc1} >
                <Text style={styles.text1} >PROJET SJP 5</Text>
          </View>

          <View style={styles.Bloc2} >

            <View style={{ backgroundColor: "Dark", flex: 2 }} />
            <View style={{ backgroundColor: "moove", flex: 2.5 }} />
            <View style={{ backgroundColor: "white", flex: 2 }} />

          </View>
          <View style={styles.Bloc3} >

                <View style={styles.Boutong}>
                  <Button
                    title="+"
                    onPress={() => alert('+ button pressed')}
                />
                  <Button
                    title="M"
                    onPress={() => alert('M button pressed')}
                  />
                  <Button
                    title="-"
                    onPress={() => alert('- button pressed')}
                  />
                </View>

                <View style={styles.Boutond}>
                  <Button
                    title="+"
                    onPress={() => alert('+ button pressed')}
                  />
                  <Button
                    title="M"
                    onPress={() => alert('M button pressed')}
                  />
                  <Button
                    title="-"
                    onPress={() => alert('- button pressed')}
                  />
                </View>

          </View>

      </View>


    );
  }
}


const styles = StyleSheet.create({

  text1: {
      textAlign : 'center',
      padding: 25,
      paddingTop: 50,
      color: 'Dark',

    },
  BlocP: {
      flex: 1,
      padding: 2,
    },
  Bloc2: {
      flex: 4,
      flexDirection: "row",
      backgroundColor: "red",
      padding: 5,
    },
  Bloc1: {
      backgroundColor: "blue",
      flex: 1
    },
  Bloc3: {
      backgroundColor: "black",
      flex: 1,
      flexDirection: 'row',
    },
  Boutong: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  Boutond: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
