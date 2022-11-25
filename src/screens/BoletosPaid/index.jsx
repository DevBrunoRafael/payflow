import React from "react";
import { styles } from "./styles";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import BoletoCard from "../../components/BoletoCard";

const BoletoPaid = () => {
   return (
      <SafeAreaView style={styles.container}>
         <Header />
         <View style={styles.box}>
            <Text style={styles.boxText}>Meus Extratos</Text>
            <Text style={styles.boletosQuantity}>3 Pagos</Text>
         </View>
         <ScrollView style={styles.scrollView}>
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
         </ScrollView>
      </SafeAreaView>
   );
};

export default BoletoPaid;
