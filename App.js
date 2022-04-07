import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoreisScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Meal Categories">
                    <Stack.Screen
                        name="Meal Categories"
                        component={CategoriesScreen}
                    />

                    <Stack.Screen
                        name="Meal Overview"
                        component={MealOverviewScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
