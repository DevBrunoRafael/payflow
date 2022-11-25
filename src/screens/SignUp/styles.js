import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
     width: "100%",
  },
  textHeader: {
     fontSize: 40,
     fontWeight: "700",
     marginTop: 60,
     marginBottom: 30,
     marginLeft: 25,
  },
  containerInputs: {
     width: "100%",
     paddingHorizontal: 25,
  },
  input: {
     borderWidth: 1,
     borderRadius: 0,
     borderColor: "#FF941A",
     marginBottom: 15,
     padding: 10,
     fontSize: 20,
  },
  button: {
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#FF941A",
     paddingVertical: 15,
     borderRadius: 10,
     marginBottom: 15,
     marginTop: 10,
  },
  buttonText: {
     fontWeight: "700",
     fontSize: 16,
     color: "#fff",
  },
  redirectText: {
     color: "#FF941A",
     fontWeight: "bold",
  },
  errorMessage: {
     alignSelf: "flex-start",
     color: "#ff375b",
     marginBottom: 8,
  },
});