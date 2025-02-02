import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import ListProducts from "../components/ListProducts";
import PostForm from "../components/PostForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDataHelper } from "../helpers/getDataHelper";

const Home = ({ navigation }) => {
    const [itemData, setItemData] = useState([]);
    return (

        <SafeAreaView style={styles.container}>
            <Button title="To Account" onPress={() => navigation.navigate('Account')} />
            <Button title="Fetch Data" onPress={() => getDataHelper(setItemData)} />
            <ListProducts data={itemData} />
            <PostForm></PostForm>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10%',
    },
});

export default Home;