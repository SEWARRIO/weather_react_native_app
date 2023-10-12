// AppRouter.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Weather from '../components/Weather';

export type AppRouterStack = {
  Weather: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<AppRouterStack>();

const AppRouter: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
};

export default AppRouter;


/**import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../AuthContext';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Weather from '../components/Weather';

export type AppRouterStack = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  Weather: undefined;
};

const Stack = createStackNavigator<AppRouterStack>();

const AppRouter: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={() => (
          <View>
            <Text>Welcome to WeatherApp</Text>
            {isLoggedIn && <Button title="Logout" onPress={logout} />}
          </View>
        )}
      />
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{ title: 'Weather' }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
 */