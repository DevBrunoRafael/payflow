import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { Controller } from "react-hook-form";

const Input = ({ children, nameInput, control, placeholder}) => {
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
               />
            </View>
         )}
      />
   );
};

export default Input;

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
