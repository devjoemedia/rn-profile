import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TradingBoard = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>TradingBoard</Text>
      </View>

      <View style={{ flex: 7, backgroundColor: "blue" }}>
        <Text>TradingBoard</Text>
      </View>

      <View style={{ flex: 2, backgroundColor: "yellow" }}>
        <Text>TradingBoard</Text>
      </View>
    </View>
  );
};

export default TradingBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
