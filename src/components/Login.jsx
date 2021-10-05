import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect, useContext} from 'react';
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
// import signIn from './scripts-verificar-login';
import AuthContext from '../contexts/auth' 

const Login = ()=>{
    const [offset] = useState(new Animated.ValueXY({x:0,y:90}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:130,y:155}))
  useEffect(()=>{
    let keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    let keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([  
      Animated.spring(offset.y,{
       toValue: 0,
        speed:2,
        useNativeDriver: true,
        bounciness:20
      }),Animated.timing(opacity,{
        toValue:1,
        duration:200,
        useNativeDriver: true,
      })
    ]).start();
 
  },[]);

  const [lerUser, setlerUser] = React.useState(null);
  const [lerSenha, setSenha] = React.useState(null);

  const {signed, user, logado} = useContext(AuthContext);
  console.log(signed)
  console.log(user)
  
  //quando clicar no botão de login
 function handleSignIn(){
    //  signIn().then((response)=>{
    //    console.log(response);
    //  });
    console.log("Logado");
    logado(lerUser,lerSenha);
  


  }
  

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:55,
        duration:100,
        useNativeDriver: false,

       
      }), 
      Animated.timing(logo.y,{
        toValue:65,
        duration:100,
        useNativeDriver: false,


      }),
    ]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:130,
        duration:100,
        useNativeDriver: false,
      }), 
      Animated.timing(logo.y,{
        toValue:155,
        duration:100,
        useNativeDriver: false,

      }),
    ]).start();
  }

  return (
   <KeyboardAvoidingView style={Styles.background}>
     <View style={Styles.logoW}>
       <Animated.Image 
       style={{
        width:logo.x,
        height:logo.y,
        }
       }
       source={require('../../assets/LogoWolf.png')}/>
     </View>
     <Animated.View style={[
         Styles.container,
         {
           opacity:opacity,
           transform:[
             {
               translateY:offset.y
             }
           ]
         }
         ]}>
       <TextInput
        style={Styles.input}
        placeholder="Usuário"
        autoCorrect={false}
        onChangeText={setlerUser}
       />
         <TextInput
        style={Styles.input}
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={setSenha}
       />

       <TouchableOpacity style={Styles.btnSubmit} onPress={handleSignIn}>
         <Text style={Styles.btnSubmitText}>Acessar</Text>
       </TouchableOpacity>
       <TouchableOpacity style={Styles.btnRegister}>
         <Text style={Styles.btnRegisterText}>Cadastrar usuário</Text>
       </TouchableOpacity>

     </Animated.View>
   </KeyboardAvoidingView>
  );


}

const Styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#191919'
    },
    logoW:{
      flex:1,
      alignItems: 'center',
      justifyContent:'flex-end',
      
  
    }, 
    container:{
 
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'90%',
      paddingBottom:50
   
    },
    input:{
      backgroundColor: '#fff',
      width:'90%',
      marginBottom:15,
      color:'#222',
      fontSize:17,
      borderRadius:7,
      padding:10
    }, 
    btnSubmit:{
      backgroundColor: '#3333CC',
      width:'90%',
      height:45,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:7,
    },
    btnSubmitText:{
      color:'#fff',
      fontSize:18
    },
    btnRegister:{
      marginTop:10,  
    },
    btnRegisterText:{
      color:'#fff',
    }
    
});
  

export default Login;