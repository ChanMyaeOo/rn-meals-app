import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
    const onPressHandler = (id, title) => {
        navigation.navigate("Meal Overview", {
            categoryId: id,
            headerTitle: title,
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
                    onPress={() => onPressHandler(item.id, item.title)}
                />
            )}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
