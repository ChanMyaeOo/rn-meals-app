import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoreisScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetails from "./screens/MealDetails";
import FavouriteScreen from "./screens/FavouriteScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ title: "All Categories" }}
            />
            <Drawer.Screen name="Favourites" component={FavouriteScreen} />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Meal Categories">
                    <Stack.Screen
                        name="Meal Categories"
                        component={DrawerNav}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Meal Overview"
                        component={MealOverviewScreen}
                    />

                    <Stack.Screen
                        name="Meal Details"
                        component={MealDetails}
                        options={{ title: "About the Meal" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
