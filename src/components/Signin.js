import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PressableOpacity,
} from "react-native";
import React, { useState } from "react";

const Signin = () => {
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
        Login
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View>
        <Text
          style={{ color: "#0d8d54", textAlign: "right", marginBottom: 20 }}
        >
          Forgot Password
        </Text>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.btn}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>
          Don't have an account yet?{" "}
          <Text style={{ color: "#0d8d54" }}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signin;

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
