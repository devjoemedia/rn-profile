import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
      <View style={styles.content}></View>
      <View style={styles.image}></View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.4,
    backgroundColor: "#ddd",
  },
  image: {
    flex: 0.4,
    backgroundColor: "#eee",
  },
  footer: {
    flex: 0.2,
    backgroundColor: "#ccc",
  },
});
