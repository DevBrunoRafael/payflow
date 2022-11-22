import { api } from "../api";

class BoletoManagement {
   async listAllBoletos() {
      api.get();
   }

   async listPaidBoletos() {
      api.get();
   }

   async markAsPaid() {
      api.patch();
   }

   async deleteBoleto() {
      api.delete();
   }

   async registerBoleto() {
      api.post();
   }
}

// armazenar esses dados no context

export default new BoletoManagement();
