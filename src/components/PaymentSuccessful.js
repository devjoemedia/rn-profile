import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PaymentSuccessfulImg from "../../assets/payment-successful.png";
import { Entypo } from "@expo/vector-icons";

const PaymentSuccessful = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 22,
            color: "#222",
            marginVertical: 15,
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Payment Successful
        </Text>
        <Text style={{ fontSize: 20, color: "#888" }}>
          Interfaces are better when you need to define a new object or method
          of an object. For example, in React applications, when you need to
          define the props that a specific component is going to receive, it’s
          ideal to use interface over types:
        </Text>
      </View>
      <View style={styles.image}>
        <Image
          source={PaymentSuccessfulImg}
          style={{ width: 340, height: 250 }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#2d3092",
            width: 200,
            padding: 15,
            borderRadius: 50,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={{ color: "#666", textAlign: "center", fontSize: 18 }}>
            Previous
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 35,
          }}
        >
          <Entypo name="dot-single" size={50} color="#666" />
          <Entypo name="dot-single" size={50} color="#666" />
          <Entypo name="dot-single" size={50} color="#2d3092" />
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#666", textAlign: "center", fontSize: 18 }}>
            {/* Skip */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.4,
  },
  image: {
    flex: 0.5,
    alignItems: "center",
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
