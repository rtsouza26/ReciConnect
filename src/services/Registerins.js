import {http} from "./config"

export default{
    getInstituicao:()=>{
        return http.get('intituicao');
    },
    salvar:(instituicao)=>{
        return http.post("instituicao",instituicao);
    }
}