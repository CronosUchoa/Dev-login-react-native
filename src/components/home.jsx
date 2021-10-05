import React,{useContext} from 'react';
import { StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    View,
    KeyboardAvoidingView ,
    Image,
    Animated,
    Keyboard,
    Button
  } from 'react-native';
import AuthContext from '../contexts/auth'


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6d6e70'
        
    },
    botao: {
        backgroundColor: '#3333CC',
        width:'35%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginBottom:10
    },
    botaoText:{
        color:'#fff',
        fontSize:18
    }, 
    Textao:{
    
        color:'#fff',
        fontSize:25,
        fontWeight: "bold",
        alignSelf: 'flex-end',
        justifyContent:'center',
        marginRight:15
    

    },
    Frase:{
        color:'#181818',
        fontSize:20,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:10,
        fontWeight: "bold"
    },
    Foto:{
        width:'100%',
        height:'5%'
    }
});

const Home = ()=>{
     const {signed, user, logado, desLogado} = useContext(AuthContext);
    
    function handleSignOut(){
       desLogado();
    }
    return(
      
        <View style={styles.container}>
           
            <Image
                style={styles.Foto}
                source={require('../../assets/gojo.png')}
                />
            <Text style={styles.Textao} >Bem vindo ! {user.name}</Text>
            <Text style={styles.Frase}>Abstrair é a habilidade de se concentrar nos aspectos essenciais de um contexto qualquer.</Text>
            
            <Text style={styles.Frase}>Tudo é relativo, a única constante é a mudança em função do tempo.</Text>
           <TouchableOpacity style={styles.botao}  onPress={handleSignOut}>
                <Text style={styles.botaoText} >sair</Text>
            </TouchableOpacity> 
            <Image
                style={styles.Foto}
                source={require('../../assets/gojo.png')}
                />
        </View>
    );
}


export default Home;