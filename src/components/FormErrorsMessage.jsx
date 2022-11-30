import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FormErrorsMessage = ({ error }) => {
  // concertar componente
   return (
      <View>
         {error && (
            <Text style={styles.errorMessage}>{error.message}</Text>
         )}
      </View>
   );
};

export default FormErrorsMessage;

const styles = StyleSheet.create({
   errorMessage: {
      alignSelf: "flex-start",
      color: "#ff375b",
      marginBottom: 8,
   },
});
