// App.tsx or index.tsx
/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext';
import AppRouter from './pages/AppRouter';


type RootStack = {
  AppRouter: undefined
}

const Stack = createStackNavigator<RootStack>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="AppRouter" component={AppRouter} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;


// AuthContext.tsx - Remain the same

// Login.tsx - Remain the same

// Signup.tsx - Remain the same
*/

// App.tsx
// App.tsx or index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext';
import AppRouter from './pages/AppRouter';

type RootStack = {
  AppRouter: undefined;
};

const Stack = createStackNavigator<RootStack>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="AppRouter" component={AppRouter} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;


