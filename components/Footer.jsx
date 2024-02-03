import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.container}>
          <View style={styles.parfoot}>
            <View style={styles.foot}>
              <Text style={{ color: "lightblue", fontWeight: "bold" }}>
                Powered by 🚀 and Osama Ashraf
              </Text>
            </View>
            <View style={styles.foot}>
              <Text style={{ color: "#fff" }}>
                &copy;2024 All rights reserved
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#223588",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container: {
    paddingHorizontal: 15,
  },
  parfoot: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  foot: {
    marginBottom: 5,
  },
});
export default Footer;
