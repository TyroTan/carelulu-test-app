import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../navigation/screens/HomeScreen";
import AddTask from "../navigation/screens/AddTaskScreen";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

const AppNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    AddTask: { screen: AddTask }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        //   IconComponent = HomeIconWithBadge;
        } else if (routeName === "AddTask") {
          iconName = `ios-add-circle`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default createAppContainer(AppNavigator);
