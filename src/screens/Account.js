import React from "react";
import {Button, StyleSheet, SafeAreaView} from "react-native";
import PutForm from "../components/PutForm";


const Account = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
         <Button title = "To Home" onPress={() => navigation.navigate('Home')}></Button>
         <Button title = "To DeleteScreen" onPress={() => navigation.navigate('DeleteScreen')}></Button>
        <PutForm></PutForm>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
  },
  text: {
    fontSize: 20,
  },
});

export default Account;