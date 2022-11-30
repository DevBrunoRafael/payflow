import React, { useContext, useEffect, useState } from "react";
import { styles } from "./styles";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import List from "../../components/List";
import { AppContext } from "../../context/AppContext";

const BoletoPaid = () => {
   const { boletosPaid } = useContext(AppContext);

   return (
      <SafeAreaView style={styles.container}>
         <Header />
         <View style={styles.box}>
            <Text style={styles.boxText}>Meus Extratos</Text>
            <Text style={styles.boletosQuantity}>
               {boletosPaid.length} Pagos
            </Text>
         </View>

         <List data={boletosPaid} modal={false} />
      </SafeAreaView>
   );
};

export default BoletoPaid;
