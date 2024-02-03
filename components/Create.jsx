import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Create = ({ data, setData }) => {
  const [todo, setTodo] = useState("");
  const handleCreate = () => {
    if (todo === "") {
      alert("Please enter a valid todo");
    } else {
      const singleTodo = {
        id: data.length + 1,
        name: todo,
      };
      setData([...data, singleTodo]);
      setTodo("");
    }
  };
  return (
    <>
      <View>
        <TextInput
          placeholder="Todo name"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button title="Create" onPress={handleCreate}></Button>
      </View>
    </>
  );
};

export default Create;
