import {
   Button,
   Image,
   ScrollView,
   StyleSheet,
   Text,
   View,
} from "react-native";
import { AuthContext } from "../../context/authContext";
import React, { useContext } from "react";
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

         <Header />
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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: "100%",
      backgroundColor: "#fff"
   },
   multicolorBack: {
      width: "100%",
      marginBottom: 30,
      alignItems: "center",
   },
   multicolorBackTop: {
      backgroundColor: "#FF941A",
      height: 40,
      width: "100%",
   },
   multicolorBackBottom: {
      backgroundColor: "#fff",
      height: 40,
      width: "100%",
   },
   box: {
      height: 50,
      borderBottomWidth: 1,
      borderColor: "#E3E3E6",
      lineHeight: 25,
      marginBottom: 32,
      marginHorizontal: 25,
   },
   boxText: {
      fontSize: 20,
      fontWeight: "700",
      color: "#585666",
   },
   scrollView: {
      backgroundColor: "white",
      width: "100%",
      paddingHorizontal: 25,
   },
});
