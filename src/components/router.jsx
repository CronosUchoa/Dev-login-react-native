import React, {useContext}from 'react';
import AuthRoutes from './router-A';
 import AppRoutes from './router-B'
import AuthContext from '../contexts/auth'

const Routes = ()=>{
    const {signed, lerUser,lerSenha} = useContext(AuthContext);
    console.log("deu certo e seu nome é :" + lerUser);
    console.log("senha horrivel "+lerSenha);
    return signed ? <AppRoutes/> : <AuthRoutes/>;
};

export default Routes;