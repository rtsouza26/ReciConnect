import {http} from "./config"

export default{
    getUsuario:()=>{
        return http.get('usuario')
    },
    salvar:(usuario)=>{
        return http.post("usuario", usuario)
    }
}