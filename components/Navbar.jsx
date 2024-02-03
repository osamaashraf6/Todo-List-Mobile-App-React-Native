import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <>
      <View style={styles.nav}>
        <View style={styles.container}>
          <View style={styles.parnav}>
            <View style={styles.brand}>
              <Text style={styles.link}>Todo App</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#223588",
    height: 65,
  },
  container: {
    paddingHorizontal: 15,
  },
  parnav: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  brand: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
  },
  link: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Navbar;
