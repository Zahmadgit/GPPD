import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { getData } from "../services/ServerApi";
import ListProducts from "../services/ListProducts";

const Home = ({ navigation }) => {
    const [itemData, setItemData] = useState([]);

    const fetchData = async () => {
        try {
            const itemInfo = await getData();
            if (itemInfo.success && itemInfo.data) {
                setItemData(itemInfo.data.list);
            } else {
                console.error("No data available");
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="To Account" onPress={() => navigation.navigate('Account')} />
            <Button title="Fetch Data" onPress={fetchData} />
            <ListProducts data={itemData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default Home;