import { FlatList, View } from "react-native";
import BoletoCard from "../components/BoletoCard";
import React from "react";

const List = ({ data, modal }) => {
   return (
      <View style={{ marginHorizontal: 25 }}>
         <FlatList
            keyExtractor={item => item._id}
            data={data}
            renderItem={({ item }) => (
               <BoletoCard
                  _id={item._id}
                  nome={item.nomeBoleto}
                  vencimento={item.vencimento}
                  valor={item.valor}
                  modalOn={modal}
               />
            )}
         />
      </View>
   );
};

export default List;
