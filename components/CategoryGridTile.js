import { View, Pressable, Text, StyleSheet } from "react-native";
function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                style={styles.button}
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 130,
        borderRadius: 20,
        elevation: 2,
        margin: 14,
        overflow: "hidden",
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
    },
});
