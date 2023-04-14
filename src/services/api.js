import { DefaultTheme } from "@react-navigation/native";
import axios from "axios";
/*
// Roda o sevidor json com o seguinte comando{ json-server --watch -d 180 --port 8000 --host 192.168.0.8 db.json }
     
    Tem que ser na porta 8000 porque a porta 3000(defalt) já está dando erro/está sendo utilizada
*/

const api = axios.create({
    baseURL: 'http://192.168.0.8:8000/'
})

export default api;