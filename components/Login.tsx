/*import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAuth } from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppRouterStack } from '../pages/AppRouter';

interface LoginProps {
  onLogin: () => void;
  navigation: NavigationProp<AppRouterStack, "Login">
}

const Login: React.FC<LoginProps> = ({ onLogin, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.153.6:3000/auth/login', { username, password });
      const { user, token } = response.data;

      await AsyncStorage.setItem('loggedInUser', JSON.stringify({ user, token }));

      onLogin();

     
      navigation.navigate('Weather');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
*/
// Login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRouterStack } from '../pages/AppRouter'; // Adjust the path accordingly

interface LoginProps {
  onLogin: () => void;
  navigation: NavigationProp<AppRouterStack, 'Login'>;
}

const Login: React.FC<LoginProps> = ({ onLogin, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.153.6:3000/auth/login', { username, password });
      const { user, token } = response.data;
  
      await AsyncStorage.setItem('loggedInUser', JSON.stringify({ user, token }));
  
      // Provide both user and token to the login function
      login(user, token);
  
      navigation.navigate('Weather');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;
