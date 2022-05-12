import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import Picture from "../../assets/a.jpg";

export default function ProfileView() {
  return (
    <View style={styles.container}>
      {/* Top Nav */}
      <View style={styles.topNav}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </Text>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profile}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            position: "relative",
            width: 140,
            height: 140,
          }}
        >
          <Image
            source={Picture}
            style={{ width: 140, height: 140, borderRadius: 70 }}
          />
          <View
            style={{
              position: "absolute",
              right: -15,
              top: 60,
              backgroundColor: "rgba(31,194,217,1)",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          >
            <EvilIcons name="camera" size={25} color="#fff" />
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "#888", fontSize: 20 }}>School</Text>
          <Text style={{ color: "#666", fontSize: 22 }}>
            The Lawrenceville School
          </Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "#888", fontSize: 20 }}>Email Address</Text>
          <Text style={{ color: "#666", fontSize: 22 }}>
            dominic@lawrenceville.edu
          </Text>
        </View>

        <View
          style={{
            marginBottom: 10,
            paddingBottom: 4,
            borderBottomColor: "#eee",
            borderBottomWidth: 3,
          }}
        >
          <Text style={{ color: "rgb(31,194,217)", fontSize: 16 }}>Name</Text>
          <Text style={{ color: "#666", fontSize: 20 }}>Dominic Adams</Text>
        </View>

        <View
          style={{
            marginBottom: 10,
            paddingBottom: 4,
            borderBottomColor: "#eee",
            borderBottomWidth: 3,
          }}
        >
          <Text style={{ color: "rgb(31,194,217)", fontSize: 16 }}>
            Nick Name
          </Text>
          <Text style={{ color: "#666", fontSize: 20 }}>l.dominic</Text>
        </View>

        <View
          style={{
            marginBottom: 10,
            paddingBottom: 4,
            borderBottomColor: "#eee",
            borderBottomWidth: 3,
          }}
        >
          <Text style={{ color: "rgb(31,194,217)", fontSize: 16 }}>
            Emergency Contact
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#666", fontSize: 20 }}>
              +233 540 544 666
            </Text>
            <AntDesign name="contacts" size={24} color="black" />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(31,194,217)",
              padding: 20,
              borderRadius: 50,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              UPDATE PROFILE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNav: {
    flex: 5,
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  profile: {
    flex: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 70,
    marginTop: 20,
    paddingHorizontal: 16,
  },
});
