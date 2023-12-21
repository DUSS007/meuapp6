import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, StatusBar, ImageBackground, SafeAreaView,  } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";
import db from './localdb';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text:'',
      atalho:[],
    }
  }
  render(){
    return(
        <View style ={styles.container}>
          <SafeAreaView style ={styles.droidSafeArea}/>
          <ImageBackground source={require('./assets/caverna.jpg')} style={styles.backgroundImage}>
          <Header
            backgroundColor={"black"}
            centerComponent={{
              text:'Dicionario MINECRAFT',
              style:{color:'white',fontSize:20},
            }}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({text:text});
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              var word = this.state.text.toUpperCase();
              db[word]
              ? (this.setState({atalho: db[word].atalho}))
              : alert("a palavra não existe no banco de dados")
            }}>
              <Text style = {styles.buttonText}>PESQUISAR</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.atalho}>{this.state.atalho}</Text>
            </View>

            </ImageBackground>
        </View>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor: '#b8b8b8',
  },
  droidSafeArea:{
    marginTop: Platform.OS ==="android" ? StatusBar.currentHeight:0,
  },
  inputBox:{
    marginTop: 200,
    width:'80%',
    alignSelf:'center',
    height: 40,
    textAlign:'center',
    borderWidth: 4,
    
  },
  goButton:{
    width:'50%',
    height: 55,
    alignSelf:"center",
    padding: 10,
    margin: 10
  },
  buttonText:{
    textAlign:"center",
    fontSize:30,
    fontWeight:'bold'
  },
  displayText:{
    textAlign:'center',
    fontSize:30,
  },
  atalho:{
    textAling:'center',
    fontSize:30,
    color:"white",
    fontWeight:'bold',
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  }

});
