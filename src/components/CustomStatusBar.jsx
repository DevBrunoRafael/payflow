import { StatusBar } from "react-native";
import React from "react";

const CustomStatusBar = ({ color }) => {
   return (
      <StatusBar
         barStyle="dark-content"
         hidden={false}
         backgroundColor={color}
         translucent={false}
         networkActivityIndicatorVisible={true}
      />
   );
};

export default CustomStatusBar;