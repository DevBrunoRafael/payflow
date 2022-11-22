import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../context/authContext";
import React, { useContext } from "react";

const Home = () => {
   const { signOut } = useContext(AuthContext);

   const handleSignOut = () => {
      signOut();
   };

   return (
      <View style={styles.container}>
         <Text style={styles.text}>E se o usuário não souber escrever?</Text>
         <Button title="Logout" color={"#FF941A"} onPress={handleSignOut} />
      </View>
   );
};

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      fontSize: 30,
   },
});
