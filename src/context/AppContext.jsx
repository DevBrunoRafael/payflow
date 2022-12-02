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
      await BoletoService.registerBoleto({
         nomeBoleto,
         vencimento,
         valor,
         codigo: codeScanned.data
      });
      setCodeScanned({});
      await loadData();
   };

   const markBoletoAsPaid = async id => {
      await BoletoService.markAsPaid(id);
      await loadData();
   };

   const deleteBoleto = async id => {
      await BoletoService.deleteBoleto(id);
      await loadData();
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
