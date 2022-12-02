import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const InputScanner = ({ children, placeholder }) => {
   const { codeScanned, setCodeScanned } = useContext(AppContext);
   return (
      <View style={styles.boxInput}>
         <View style={styles.boxIconInput}>{children}</View>
         <TextInput
            style={styles.inputArea}
            placeholder={placeholder}
            value={codeScanned.data}
            onChangeText={(text) => setCodeScanned({...codeScanned, data: text})}
         />
      </View>
   );
};

export default InputScanner;

const styles = StyleSheet.create({
   boxInput: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "#E3E3E5",
      marginTop: 10,
   },
   inputArea: {
      paddingLeft: 16,
      paddingHorizontal: 16,
      fontSize: 16,
   },
   boxIconInput: {
      height: 59,
      width: 59,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#",
      borderRightWidth: 1,
      borderColor: "#E3E3E5",
   },
});
