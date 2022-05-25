import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Feather,
  SimpleLineIcons,
  Entypo,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import Yogas from "../../assets/b.png";
import CarpenterImg from "../../assets/carpenter.png";
import PainterImg from "../../assets/painter.png";
import MechanicImg from "../../assets/merchanic.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.dFlex}>
          <View>
            <Text style={{ color: "#666" }}>Current Location</Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <SimpleLineIcons name="location-pin" size={16} color="#0d8d54" />
              <Text style={{ color: "#0d8d54", fontWeight: "bold" }}>
                Jin Pahlawan No 38
              </Text>
            </View>
          </View>
          <Text>
            <Ionicons name="notifications" size={24} color="black" />
          </Text>
        </View>
        {/* Barnner */}
        <View style={styles.categoryBanner}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 8,
                backgroundColor: "#8fc442",
                borderRadius: 25,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SimpleLineIcons name="location-pin" size={20} color="#fff" />
            </View>
            <Text style={{ color: "#fff", marginTop: 10 }}>Order</Text>
          </View>

          <View style={{ alignItems: "center", marginLeft: 20 }}>
            <View
              style={{
                padding: 8,
                backgroundColor: "#8fc442",
                borderRadius: 25,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="refresh-cw" size={20} color="#fff" />
            </View>
            <Text style={{ color: "#fff", marginTop: 10 }}>On Progress</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Image source={Yogas} style={{ width: 100, height: 100 }} />
          </View>
        </View>
      </View>

      {/* Categories */}
      <ScrollView style={styles.middle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 20 }}>Categories</Text>
            <Text style={{ color: "#666" }}>
              Find your categories of servies
            </Text>
          </View>
          <Text>See All</Text>
        </View>

        {/* Catego Container */}
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "47%",
              backgroundColor: "#0d8d54",
              height: 180,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image source={Yogas} style={{ width: 100, height: 100 }} />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#8fc442",
                color: "#fff",
                padding: 10,
                borderRadius: 50,
                width: "100%",
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Electrictian
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "47%",
              backgroundColor: "#0d8d54",
              height: 180,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image
                source={CarpenterImg}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#8fc442",
                color: "#fff",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Carpenter
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "47%",
              backgroundColor: "#0d8d54",
              height: 180,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image source={PainterImg} style={{ width: 100, height: 100 }} />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#8fc442",
                color: "#fff",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Painter
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "47%",
              backgroundColor: "#0d8d54",
              height: 180,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image source={MechanicImg} style={{ width: 100, height: 100 }} />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#8fc442",
                color: "#fff",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Mechanic
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Nav */}
      <View style={styles.buttomNav}>
        <Entypo name="home" size={24} color="#8fc442" />
        <Feather name="message-square" size={24} color="#f1f1f1" />
        <AntDesign name="search1" size={24} color="#f1f1f1" />
        <Octicons name="paste" size={24} color="#f1f1f1" />
        <AntDesign name="user" size={24} color="#f1f1f1" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.5,
  },
  dFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBanner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0d8d54",
    marginTop: 20,
    borderRadius: 10,
    // "orange#f2bD00,lightGreen#8fc442,white#ffff,yellow#ffe072,green#0d8d54"
  },
  middle: {
    flex: 0.4,
    marginVertical: 10,
  },
  buttomNav: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // boxShadow: "0 8 23 rgba(0, 0, 0, 0.4)",
    backgroundColor: "#0d8d54",
    padding: 10,
  },
});
