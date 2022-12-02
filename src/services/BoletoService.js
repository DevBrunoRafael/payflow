import { api } from "../api";

class BoletoService {
   async listAllBoletos() {
      try {
         const { data } = await api.get(`/boletos/todos`);
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }

   async listPaidBoletos() {
      try {
         const { data } = await api.get(`/boletos/pagos`);
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }

   async getById(id) {
      try {
         const { data } = await api.get(`/boletos/${id}`);
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }

   async markAsPaid(id) {
      try {
         const { data } = await api.put(`/boletos/${id}`);
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }

   async deleteBoleto(id) {
      try {
         const { data } = await api.delete(`/boletos/${id}`);
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }

   async registerBoleto({ nomeBoleto, vencimento, valor, codigo }) {
      const dateVencimentoFormat = vencimento.split("/").reverse().join("-");
      try {
         const { data } = await api.post(`/boletos/`, {
            nomeBoleto,
            vencimento: dateVencimentoFormat,
            valor,
            codigo,
         });
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }
}

export default new BoletoService();
