import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({ title, imageUrl, id }) {
    const navigation = useNavigation();
    const handleOnPress = (mID) => {
        navigation.navigate("Meal Details", {
            mealId: mID,
        });
    };
    return (
        <Pressable style={styles.container} onPress={() => handleOnPress(id)}>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        borderRadius: 5,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 180,
    },
    title: {
        padding: 10,
    },
});
