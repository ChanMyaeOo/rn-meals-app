import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ meals }) => {
    function renderItemHandler({ item }) {
        return (
            <MealItem
                title={item.title}
                imageUrl={item.imageUrl}
                id={item.id}
            />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={renderItemHandler}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    },
});
