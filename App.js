import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileView from "./src/components/ProfileView";
import TradingBoard from "./src/components/TradingBoard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileView />
      {/* <TradingBoard /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
});
