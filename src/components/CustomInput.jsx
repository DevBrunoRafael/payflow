import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { Controller } from "react-hook-form";

const CustomInput = ({ children, nameInput, control, placeholder, type, secure}) => {
   return (
      <Controller
         control={control}
         name={nameInput}
         render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.boxInput}>
               <View style={styles.boxIconInput}>{children}</View>
               <TextInput
                  style={styles.inputArea}
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType={type}
                  secureTextEntry={secure}
               />
            </View>
         )}
      />
   );
};

export default CustomInput;

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
