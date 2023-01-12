import axios from "axios";

const apiUrl = import.meta.env.VITE_API;

const API = axios.create({
  baseURL: apiUrl,
})

export const useApi = () => ({
    //Criando uma Equipe
    createStaff: async (id, nome, cor, descricao) => {
      const response = await API.post('/equipes', { id, nome, cor, descricao })
      return response;
    },

    //Excluindo uma Equipe
    deleteStaff: async (id, nome, cor, descricao) => {
      const response = await API.post('/equipes', { id, nome, cor, descricao })
      return response;
    },
    dataStaff: async () => {
      const response = await API.get('/equipes');
      return response;
    },



    //Adicionando um Colaborador
    createMember: async (id, nome, cargo, equip) => {
      const response = await API.post('/Equipes', { id, nome, cargo, equip })
      return response;
    },

    //Exluindo um Colaborador
    deleteMember: async (id) => {
      const response = await API.post('/Equipes', { id})
      return response;
    }
  }
)


