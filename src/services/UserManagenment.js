import { api } from "../api";

class UserManagement {
   async userSignin(email, password) {
      // const response = await api.post("", { email, password });
      return {
        userId: "111222333444555666",
        token: "613ytcdqtrxcquydf6favçsdpqowçmabcyz6w820347462hasmdoasud"
      }
   }

   async userSignup(nome, email, password) {
      const response = await api.post("", {
         nome,
         email,
         password,
      });
   }
}

export default new UserManagement();
