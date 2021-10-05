import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView ,
  Image,
  Animated,
  Keyboard
} from 'react-native';
import Routes from './src/components/router.jsx';
import {AuthProvider} from './src/contexts/auth.jsx';

export default function App() {
  const [signed,setSigned] = useState(false);

  return (
    <NavigationContainer>
        <AuthProvider>
          <Routes></Routes>
        </AuthProvider>
    </NavigationContainer>
     
  )};
