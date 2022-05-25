import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import Pic1 from "../../assets/1.jpg";
import Pic2 from "../../assets/2.jpg";
import Pic3 from "../../assets/3.jpg";
import Pic4 from "../../assets/4.jpg";
import Pic5 from "../../assets/5.jpg";

const data = [
  {
    id: 1,
    name: "Ann Neal",
    age: "2 years",
    location: "Accra, Ghana",
    category: "Dog",
    img: Pic1,
  },
  {
    id: 2,
    name: "Eva Bergman",
    age: "2 years",
    location: "Accra, Ghana",
    category: "Dog",
    img: Pic2,
  },
  {
    id: 3,
    name: "Lisa Oniel",
    age: "2 years",
    location: "Accra, Ghana",
    category: "Cat",
    img: Pic3,
  },
  {
    id: 4,
    name: "Jeffery Bowels",
    age: "2 years",
    location: "Accra, Ghana",
    category: "Cat",
    img: Pic4,
  },
  {
    id: 5,
    name: "Wander Granger",
    age: "2 years",
    location: "Accra, Ghana",
    category: "Cat",
    img: Pic5,
  },
];

const Cats = () => {
  const Item = ({ name, age, img, location, category }) => (
    <View style={styles.listCtn}>
      <Image
        source={img}
        style={{ width: 120, height: 180, borderRadius: 10 }}
      />
      <View
        style={{
          elevation: 3,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          padding: 20,
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ color: "#2d3092", fontSize: 20, fontWeight: "bold" }}>
          {name}
        </Text>
        <Text style={{ color: "#888", fontSize: 18 }}>{category}</Text>
        <Text style={{ color: "#888", fontSize: 18 }}>{age}</Text>

        <View
          style={{ alignItems: "center", flexDirection: "row", marginTop: 10 }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <Text style={{ color: "#888", fontSize: 18 }}>{location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput placeholder="Search..." style={{ flex: 1, padding: 10 }} />
      </View>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              age={item.age}
              img={item.img}
              location={item.location}
              category={item.category}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Cats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingHorizontal: 12,
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  listCtn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
