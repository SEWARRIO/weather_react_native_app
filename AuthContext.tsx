import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isLoggedIn: boolean;
  login: (user: any, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('loggedInUser');
        if (storedUser) {
          const { token } = JSON.parse(storedUser);
          console.log('User is already logged in with token:', token);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking logged-in user:', error);
      }
    };

    checkLoggedInUser();
  }, []);

  const login = async (user: any, token: string) => {
    setIsLoggedIn(true);
    try {
      await AsyncStorage.setItem('loggedInUser', JSON.stringify({ user, token }));
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    try {
      await AsyncStorage.removeItem('loggedInUser');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
