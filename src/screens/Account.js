import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";


const Account = ({ navigation }) => {
  return (
    <View>
         <Button title = "To Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Account;