import React, { useState } from "react";

import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Scanner from "./Scanner";
import { useNavigation } from "@react-navigation/native";

const HeaderArrowNav = ({ routeNavigate, right }) => {
   const [modalVisibility, setModalVisibility] = useState(false);
   const navigation = useNavigation();

   return (
      <View style={styles.boxArrowleft}>
         <TouchableOpacity
            style={styles.arrowleft}
            onPress={() => navigation.navigate(routeNavigate)}
         >
            <AntDesign name="arrowleft" size={26} color="#B1B0B8" />
         </TouchableOpacity>
         {right && (
            <TouchableOpacity
               style={styles.arrowright}
               onPress={() => setModalVisibility(true)}
            >
               <MaterialCommunityIcons
                  name="barcode-scan"
                  size={26}
                  color="#B1B0B8"
               />
            </TouchableOpacity>
         )}

         <Modal
            visible={modalVisibility}
            transparent={true}
            onRequestClose={() => setModalVisibility(false)}
            animationType={"fade"}
         >
            <TouchableOpacity
               style={styles.modal}
               onPress={() => setModalVisibility(false)}
            >
               <View style={styles.spaceScann}>
                  <Scanner
                     handleClose={() => setModalVisibility(false)}
                     setVisibility={() => setModalVisibility(false)}
                  />
               </View>
            </TouchableOpacity>
         </Modal>
      </View>
   );
};

export default HeaderArrowNav;

const styles = StyleSheet.create({
   boxArrowleft: {
      width: "100%",
      paddingTop: 15,
      paddingBottom: 20,
      paddingLeft: 15,
      paddingRight: 15,
      justifyContent: "space-between",
      flexDirection: "row",
   },
   arrowleft: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   arrowright: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   modal: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.97)",
      justifyContent: "center",
      alignItems: "center",
   },
   spaceScann: {
      width: 350,
   },
});
