// Home.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type AppRouterStack = {
  Weather: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined; // Add Home here
};

type Props = {
  navigation: NavigationProp<AppRouterStack, keyof AppRouterStack>;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Weather')} title="Go to weather" />
    </View>
  );
};

export default Home;
