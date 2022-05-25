import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PressableOpacity,
} from "react-native";
import React, { useState } from "react";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
          textAlign: "center",
          color: "#0d8d54",
        }}
      >
        Signup
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View>
        <TouchableOpacity>
          <Text style={styles.btn}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>
          Already have an account?{" "}
          <Text style={{ color: "#0d8d54" }}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 20,
  },
  shadowProp: {
    shadowColor: "#fff",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 20,
  },
  input: {
    borderColor: "#0d8d54",
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 40,
    fontSize: 18,
    color: "#666",
  },
  btn: {
    color: "#fff",
    backgroundColor: "#0d8d54",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 50,
    textAlign: "center",
    fontSize: 20,
  },
});
