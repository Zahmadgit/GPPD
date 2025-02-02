import React from "react";
import {Button, StyleSheet, SafeAreaView} from "react-native";
import DeleteForm from "../components/DeleteForm"

const DeleteScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="To Home" onPress={() => navigation.navigate('Home')} />
      <Button title="To Account" onPress={() => navigation.navigate('Account')} />
      <DeleteForm />
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
}
});

export default DeleteScreen;
