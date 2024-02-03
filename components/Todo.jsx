import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Create from "./Create";

const Todo = ({ data, setData }) => {
  const handleRemove = (id) => {
    const updated = data.filter((item) => item.id != id);
    setData(updated);
  };
  return (
    <>
      <Create data={data} setData={setData} />
      <View style={styles.todoContainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>Your Todos : </Text>
          <View style={styles.todos}>
            <ScrollView
              style={{
                borderWidth: data.length > 4 ? 1 : 0,
                borderColor: "#e74c3c",
                paddingHorizontal: 5,
              }}
            >
              {data.map((todo) => (
                <View key={todo.id}>
                  <TouchableOpacity style={styles.listItem}>
                    <Text style={styles.singleTodo}>{todo.name}</Text>
                    <Text
                      style={styles.removeButton}
                      onPress={() => handleRemove(todo.id)}
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
              {data.length == 0 && (
                <Text style={{ color: "#f39c12", fontWeight: "bold" }}>
                  There are no todos!
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  todoContainer: {
    paddingVertical: 120,
  },
  heading: {
    color: "#3498db",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
  },
  todos: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 260,
    maxHeight: 300,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3498db",
    borderRadius: 5,
    padding: 6,
    width: 300,
    marginBottom: 5,
  },
  singleTodo: {
    color: "#f39c12",
    fontWeight: "bold",
  },
  removeButton: {
    width: 72,
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    color: "#fff",
  },
});
export default Todo;
