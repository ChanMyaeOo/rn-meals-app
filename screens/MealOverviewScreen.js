import { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const headerTitle = route.params.headerTitle;
    const displayedMeals = MEALS.filter(
        (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
    );

    useEffect(() => {
        navigation.setOptions({
            title: headerTitle,
        });
    }, []);

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
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderItemHandler}
            />
        </View>
    );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    },
});
