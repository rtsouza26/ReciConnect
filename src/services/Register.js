import {http} from "./config"

export default{
    getUsuario:(email)=>{
        return http.get('usuario/'+ email)
    },
    salvar:(usuario)=>{
        return http.post("usuario", usuario)
    },
    
}