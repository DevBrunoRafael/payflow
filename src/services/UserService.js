import { api } from "../api";

class UserService {
   async userSignin(email, password) {
      try {
         const { data } = await api.post("/auth/login", { email, password });
         return data;
      } catch (error) {
         alert(error.response.data.message);
      }
   }

   async userSignup(nome, email, password) {
      try {
         await api.post("/auth/register", {
            nome,
            email,
            password,
         });
      } catch (error) {
         alert(error.response.data.message)
      }
   }
}

export default new UserService();
