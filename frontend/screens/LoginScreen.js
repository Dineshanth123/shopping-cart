import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.14.138:8000/accounts/login/', {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        // Navigate to the Home screen on successful login
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/bg2.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        <Text onPress={() => navigation.navigate('Signup')} style={styles.link}>
          Don't have an account? Sign up
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});
