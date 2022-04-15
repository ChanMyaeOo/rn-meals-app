import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

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

    return <MealList meals={displayedMeals} />;
}

export default MealOverviewScreen;
