import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListProducts = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemid}>{item.id}</Text>
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
            <Text style={styles.itemStock}>Stock: {item.stock}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    
    },
    itemid: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        color: 'green',
    },
    itemStock: {
        fontSize: 16,
        color: 'blue',
    },
});

export default ListProducts;