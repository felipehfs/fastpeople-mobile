import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  AsyncStorage,
  View, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

import { LOGIN_USER } from '../../api/graphql';
import { useMutation } from '@apollo/react-hooks';


export default function Login(props) {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const navigation = useNavigation();

 const [authenticate] = useMutation(LOGIN_USER, {
   onCompleted(data) {

    AsyncStorage
      .setItem('token', data.login)
      .then(() => navigation.navigate('home'));
   },
   onError(error) {
    Alert.alert(error.message);
   }
 });

 const redirectToRegisty = () => {
    navigation.navigate('register');
 }

 const handlePressLogin = () => {
    authenticate({
      variables: {
        email,
        password
      }
    });
 }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.text}>FastPeople</Text>
      <View style={styles.form}>
      <TextInput 
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={text => setEmail(text)}
        style={[styles.input, styles.inputEmail]} ></TextInput>
      <TextInput 
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        style={[styles.input, styles.inputPassword]}></TextInput>

      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          onPress={handlePressLogin}
          style={styles.btnLogin} >
            <Text style={styles.btnLoginLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={redirectToRegisty}
            style={styles.btnRegistry}>
            <Text style={styles.btnRegistryLabel}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}


