import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import PutForm from "../components/PutForm";


const Account = ({ navigation }) => {
  return (
    <View>
         <Button title = "To Home" onPress={() => navigation.navigate('Home')}></Button>
         <Button title = "To DeleteScreen" onPress={() => navigation.navigate('DeleteScreen')}></Button>
        <PutForm></PutForm>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Account;