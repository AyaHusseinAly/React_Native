import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from
'react-native'
class App extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login =  async (email, pass) => {
        let user={
            email:this.state.email,
            password:this.state.password
        };
        let res = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson=await res.json(); 
        if(resJson.token){
            alert("login success")
        }else{
            alert("login failure")

        }
    }
    render() {
        return (
            <View style = {styles.container}> 
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "grey"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}/>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "grey"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}/>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                    () => this.login(this.state.email,
                    this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default App
const styles = StyleSheet.create({
    container: {
    paddingTop: 200
    },
    input: {
    margin: 15,
    height: 40,
    borderColor: 'teal',
    borderWidth:5,
    padding:10
    },
    submitButton: {
    backgroundColor: 'teal',
    padding: 10,
    margin: 15,
    height: 40,
    },
    submitButtonText:{
    color: 'white'
    }
})