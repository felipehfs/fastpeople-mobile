import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity, View,
    Alert
   } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { useMutation } from '@apollo/react-hooks';
import  { REGISTER_USER } from '../../api/graphql';

export default function Register() {

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const navigation = useNavigation();
 const [saveUser] = useMutation(REGISTER_USER, {
   ignoreResults: true
 });

 const redirectToLogin = () => {
   navigation.navigate("login")
 }

 const handleRegister = () => {
    saveUser({
      variables: {
        name,
        email,
        password
      }
    });

    Alert.alert("Registrado com sucesso!");    
 }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.text}>FastPeople</Text>
      <View style={styles.form}>
      <TextInput 
        placeholder="Nome de usuário"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
        style={[styles.input, styles.inputName]} ></TextInput>
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
          onPress={redirectToLogin}
          style={styles.btnLogin} >
            <Text style={styles.btnLoginLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleRegister}
          style={styles.btnRegistry}>
            <Text style={styles.btnRegistryLabel}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}


