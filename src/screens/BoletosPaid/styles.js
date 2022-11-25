import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: "#fff"
  },
  box: {
     borderBottomWidth: 1,
     borderColor: "#E3E3E6",
     lineHeight: 25,
     paddingBottom: 24,
     paddingTop: 32,
     marginHorizontal: 25,
     marginBottom: 32,
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center"
  },
  boxText: {
     fontSize: 20,
     fontWeight: "700",
     color: "#585666",
  },
  boletosQuantity: {
   fontSize: 13,
   color: "#706E7A"
  },
  scrollView: {
   backgroundColor: "white",
   width: "100%",
   paddingHorizontal: 25,
},
});