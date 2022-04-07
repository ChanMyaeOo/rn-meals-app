import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
    const onPressHandler = (id) => {
        navigation.navigate("Meal Overview", {
            categoryId: id,
        });
    };
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CategoryGridTile
                    title={item.title}
                    color={item.color}
                    onPress={() => onPressHandler(item.id)}
                />
            )}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
