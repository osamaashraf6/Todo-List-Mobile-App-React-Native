import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
        <StatusBar style="auto" />
        <Navbar />
        <Todo data={data} setData={setData} />
        <Footer />
      </SafeAreaView>
    </>
  );
};

export default App;
