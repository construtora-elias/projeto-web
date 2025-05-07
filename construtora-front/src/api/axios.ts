import axios from "axios";
import { ProjetoDto } from "../interfaces";

const api = axios.create({
    baseURL: "http://localhost:8092/"
})

export const createProjeto = async (projetoCreationDto: ProjetoDto): Promise<ProjetoDto> => {
    try {
        const response = (await api.post("/projeto", projetoCreationDto)).data;
    
        return response;
    } catch (e) {
        return e;
    }

}