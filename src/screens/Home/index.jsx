import React, { useContext } from "react";
import { styles } from "./styles";

import {
   ScrollView,
   Text,
   View,
} from "react-native";
import { AuthContext } from "../../context/authContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/CustomStatusBar";
import BarCodeCard from "../../components/BarCodeCard";
import Header from "../../components/Header";
import BoletoCard from "../../components/BoletoCard";

const Home = () => {
   const { signOut } = useContext(AuthContext);

   const handleSignOut = () => {
      signOut();
   };

   return (
      <SafeAreaView style={styles.container}>
         <CustomStatusBar color={"#FF941A"} />

         <Header logout={handleSignOut} />
         <View style={styles.multicolorBack}>
            <View style={styles.multicolorBackTop}></View>
            <View style={styles.multicolorBackBottom}></View>
            <BarCodeCard />
         </View>

         <View style={styles.box}>
            <Text style={styles.boxText}>Meus Boletos</Text>
         </View>

         <ScrollView style={styles.scrollView}>
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
            <BoletoCard />
         </ScrollView>
      </SafeAreaView>
   );
};

export default Home;