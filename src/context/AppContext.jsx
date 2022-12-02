import React, { createContext, useState } from "react";
import BoletoService from "../services/BoletoService";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
   const [boletos, setBoletos] = useState([]);
   const [boletosPaid, setBoletosPaid] = useState([]);
   const [loadingData, setLoadingData] = useState(true);

   const [codeScanned, setCodeScanned] = useState({});

   const loadData = async () => {
      const listBoletos = await BoletoService.listAllBoletos();
      setBoletos(listBoletos);

      const listBoletosPaid = await BoletoService.listPaidBoletos();
      setBoletosPaid(listBoletosPaid);

      setLoadingData(false);
   };

   const resetData = () => {
      setBoletos([]);
      setBoletosPaid([]);
   };

   const createBoleto = async ({ nomeBoleto, vencimento, valor }) => {
      const codigo = codeScanned.data;

      setCodeScanned({});

      await BoletoService.registerBoleto({
         nomeBoleto,
         vencimento,
         valor,
         codigo,
      });
      loadData();
   };

   const markBoletoAsPaid = id => {
      BoletoService.markAsPaid(id);
      loadData();
   };

   const deleteBoleto = id => {
      BoletoService.deleteBoleto(id);
      loadData();
   };

   return (
      <AppContext.Provider
         value={{
            boletos,
            boletosPaid,
            loadingData,
            loadData,
            resetData,
            createBoleto,
            markBoletoAsPaid,
            deleteBoleto,
            codeScanned,
            setCodeScanned,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
