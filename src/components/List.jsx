import { FlatList } from "react-native";
import BoletoCard from "../components/BoletoCard";
import React from "react";

const List = ({ data, modal }) => {
   return (
      <FlatList
         style={{ marginHorizontal: 26, paddingTop: 15 }}
         showsVerticalScrollIndicator={false}
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
   );
};

export default List;
