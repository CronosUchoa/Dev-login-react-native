const  Response = {
    token:String,
    user:{
        name:String ,
        senha:String
    } 
}


export default function signIn() {

    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({
                token:'sakjdkfjaslrisadinhaskjdaldjddeeeasdjkasautenticacaoadkjsa',
                user:{
                    name:'cronos',
                    senha:'cronos'
                }
            })
        },2000)

        
    });
}