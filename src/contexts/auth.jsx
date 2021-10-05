import React,{createContext, useState} from 'react';
 //import * as auth from '../components/scripts-verificar-login'
 import signIn from '../components/scripts-verificar-login'
const  AuthContextData = {
    signed:Boolean,
    user:Object || null, 
    signIn:async function(){
        return;
    },
    desLogado: function(){return},
}

const AuthContext = createContext(AuthContextData);


export const AuthProvider = ({children})=>{
    

    const [user,setUser] = useState(null);
   
function logado(u, s){
    signIn().then((response)=>{
        //console.log(response);
        if(u==response.user.name && s==response.user.senha){
            setUser(response.user);
      
        }
        else{
            alert("Nome de usuário ou senha incorreta");
        }
        //   setUser(response.user);
        //   console.log(response.user);
        //   console.log("deu certo" +u + s);
  
    });
}

function desLogado(){
          setUser(null);
}
    
// async function signIn(){
//     const response = await auth.signIn();
//     setUser(response.user);
// }

    return(
        <AuthContext.Provider 
        value={{signed:!!user,user, signIn, logado,desLogado}}>
            {children}
    </AuthContext.Provider>
    );
    
}

export default AuthContext;