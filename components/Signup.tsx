// Signup.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.153.6:3000/auth/signup', {
        username,
        password,
      });
      const { user, token } = response.data;

      console.log('Signup successful', user, token);

      // Use AsyncStorage to store user data
      await AsyncStorage.setItem('loggedInUser', JSON.stringify({ user, token }));
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
