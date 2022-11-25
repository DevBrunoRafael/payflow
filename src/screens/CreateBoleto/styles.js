import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: "#fff",
     justifyContent: "space-between",
  },
  boxText: {
     alignItems: "center",
     marginTop: 10,
  },
  text: {
     fontSize: 25,
     fontWeight: "700",
     lineHeight: 25,
     color: "#585666",
     textAlign: "center",
  },
  cardInput: {
     marginHorizontal: 25,
     marginTop: 30,
  },
  boxInput: {
     flexDirection: "row",
     alignItems: "center",
     borderBottomWidth: 1,
     borderColor: "#E3E3E5",
     marginBottom: 16,
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
  buttonGroup: {
     width: "100%",
     flexDirection: "row",
     marginTop: 20,
     borderColor: "#E3E3E6",
     borderTopWidth: 1,
  },
  button: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     borderLeftWidth: 1,
     borderRightWidth: 1,
     borderColor: "#E3E3E6",
     paddingHorizontal: 10,
     paddingVertical: 15,
  },
  textButton: {
     fontSize: 16,
     fontWeight: "normal",
  },
  register: {
     color: "#FF941A",
  },
  cancel: {
     color: "#706E7A",
  },
  errorMessage: {
     fontSize: 13,
     color: "#ff375b",
  },
});
