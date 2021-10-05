import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

const AuthStack = createStackNavigator();

const AuthRoutes = () =>{
    return(
        <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login}/>
    </AuthStack.Navigator> 
    )
    
};

export default AuthRoutes;