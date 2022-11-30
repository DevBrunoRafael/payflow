import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderArrowNav = ({ routeNavigate }) => {
   const navigation = useNavigation();
   const route = routeNavigate;
   return (
      <View style={styles.boxArrowleft}>
         <TouchableOpacity
            style={styles.arrowleft}
            onPress={() => navigation.navigate(routeNavigate)}
         >
            <AntDesign name="arrowleft" size={26} color="#B1B0B8" />
         </TouchableOpacity>
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
   },
   arrowleft: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
});
