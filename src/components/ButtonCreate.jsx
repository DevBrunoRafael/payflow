import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

const ButtonCreate = () => {
   return (
      <View style={styles.container}>
         <Feather name="plus-square" size={25} color={"#fff"} />
      </View>
   );
};

export default ButtonCreate;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FF941A",
      borderRadius: 7,
      height: 52,
      width: 52,
   },
});
