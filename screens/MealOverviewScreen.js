import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealOverviewScreen({ route }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(
        (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
    );

    function renderItemHandler(itemData) {
        return <MealItem title={itemData.item.title} />;
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
