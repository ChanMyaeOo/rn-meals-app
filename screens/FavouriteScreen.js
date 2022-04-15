import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/FavouritesContext";
function FavouriteScreen() {
    const favouriteMealsCtx = useContext(FavouritesContext);

    const favouriteMeals = MEALS.filter((meal) =>
        favouriteMealsCtx.ids.includes(meal.id)
    );

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text>You have no favourite meals yet.</Text>
            </View>
        );
    }
    return <MealList meals={favouriteMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
