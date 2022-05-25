import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import ContactImg from "../../assets/c2.jpg";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { id: 1, name: "Ann Neal", phone: "544-463-4633" },
  { id: 2, name: "Eva Bergman", phone: "544-463-4633" },
  { id: 3, name: "Lisa Oniel", phone: "544-463-4633" },
  { id: 4, name: "Jeffery Bowels", phone: "544-463-4633" },
  { id: 5, name: "Wander Granger", phone: "544-463-4633" },
  { id: 6, name: "Derbbie Hyade", phone: "544-463-4633" },
  { id: 7, name: "Richardson Johnson", phone: "544-463-4633" },
];

const Contacts = () => {
  const Item = ({ name, phone }) => (
    <View style={styles.listCtn}>
      <View
        style={{
          flexDirection: "row",
          flex: 0.6,
          alignItems: "center",
        }}
      >
        <Image
          source={ContactImg}
          style={{ width: 60, height: 60, borderRadius: 50, marginRight: 10 }}
        />

        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 18, color: "#666" }}>{phone}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 0.3,
        }}
      >
        <Feather name="phone" size={24} color="#317bd6" />
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={24}
          color="#317bd6"
        />
        <Feather name="more-vertical" size={24} color="#555" />
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item name={item.name} phone={item.phone} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  listCtn: {
    flexDirection: "row",
    paddingVertical: 20,
    marginBottom: 5,
    // backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
