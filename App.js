import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileView from "./src/components/ProfileView";
import TradingBoard from "./src/components/TradingBoard";
import Home from "./src/components/Home";
import Signup from "./src/components/Signup";
import Signin from "./src/components/Signin";
import Cats from "./src/components/Cats";
import Contacts from "./src/components/Contacts";
import AddToCart from "./src/components/AddToCart";
import PaymentSuccessful from "./src/components/PaymentSuccessful";
import Shopping from "./src/components/Shopping";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ProfileView /> */}
      {/* <TradingBoard /> */}
      {/* <Home /> */}
      <Shopping />
      {/* <AddToCart /> */}
      {/* <PaymentSuccessful /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
