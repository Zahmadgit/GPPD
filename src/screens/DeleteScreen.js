import React from "react";
import { View, Button, StyleSheet } from "react-native";
import DeleteForm from "../components/DeleteForm"

const DeleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="To Home" onPress={() => navigation.navigate('Home')} />
      <Button title="To Account" onPress={() => navigation.navigate('Account')} />
      <DeleteForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default DeleteScreen;
