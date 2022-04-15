import { useLayoutEffect, useContext } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/FavouritesContext";
function MealDetails({ route, navigation }) {
    const id = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === id);

    const FavouriteMealsCtx = useContext(FavouritesContext);

    const isFavouriteMeal = FavouriteMealsCtx.ids.includes(id);

    const handleFavouriteStatusContext = () => {
        console.log("hello");
        if (isFavouriteMeal) {
            FavouriteMealsCtx.removeFavouriteMeal(id);
        } else {
            FavouriteMealsCtx.addFavouriteMeal(id);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={handleFavouriteStatusContext}>
                    <Ionicons
                        name={isFavouriteMeal ? "star" : "star-outline"}
                        size={20}
                        color="black"
                    />
                </Pressable>
            ),
        });
    }, [navigation, handleFavouriteStatusContext]);
    return (
        <ScrollView>
            <View>
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{meal.title}</Text>
                <View style={styles.status}>
                    <Text>
                        Duration:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            {meal.duration} mins
                        </Text>
                    </Text>
                    <Text>
                        Complexity:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            {meal.complexity}
                        </Text>
                    </Text>
                </View>

                <View style={styles.statusWrap}>
                    <Text style={styles.subTitle}>Ingredients</Text>
                    {meal.ingredients.map((item) => (
                        <Text key={item}>{item}</Text>
                    ))}
                </View>

                <View style={styles.statusWrap}>
                    <Text style={styles.subTitle}>Steps</Text>
                    {meal.steps.map((item) => (
                        <Text key={item}>{item}</Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 220,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 8,
        textAlign: "center",
    },
    status: {
        marginLeft: 15,
        marginVertical: 15,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#1122dd",
    },
    statusWrap: {
        marginHorizontal: 15,
        marginVertical: 15,
    },
});
