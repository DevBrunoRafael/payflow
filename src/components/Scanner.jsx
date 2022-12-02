import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AppContext } from "../context/AppContext";

export default function Scanner({ navigation, handleClose, setVisibility }) {
   const { setCodeScanned } = useContext(AppContext);
   const [hasPermission, setHasPermission] = useState(null);
   const [scanned, setScanned] = useState(false);

   useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
         const { status } = await BarCodeScanner.requestPermissionsAsync();
         setHasPermission(status === "granted");
      };

      getBarCodeScannerPermissions();
   }, []);

   const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setCodeScanned({ type, data });
      setVisibility();
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
   };

   if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   return (
      <View
         style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            paddingTop: 100,
         }}
      >
         <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
         />
         <View
            style={{
               width: 350,
               backgroundColor: "rgba(0,0,0,0)",
               alignItems: "center",
            }}
         >
            <Text
               style={{
                  fontSize: 25,
                  fontWeight: "700",
                  color: "#fff",
                  marginTop: -35,
               }}
            >
               Posicione o código de barras
            </Text>
         </View>
      </View>
   );
}
