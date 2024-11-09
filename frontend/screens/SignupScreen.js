import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import axios from 'axios';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.14.138:8000/accounts/register/', {
        username: email,
        password: password,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Signup Failed', 'Could not create account');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/bg2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignup} />
        <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
          Already have an account? Login
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
