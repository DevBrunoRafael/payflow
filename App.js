import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/dataContext";

import Home from "./src/screens/Home/Home";
import Signin from "./src/screens/Signin/Signin";
import Signup from "./src/screens/signup/Signup";

const Stack = createNativeStackNavigator();

const App = () => {
   return (
    // <Provider>
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
         </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
   );
};

export default () => (
  <Provider>
    <App />
  </Provider>
)
