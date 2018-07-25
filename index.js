import React from "react";
import { View, Text, AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation";

import Start from "../coffee-now/components/welcome";

const RootStack = createStackNavigator({
  Home: {
    screen: Start,
    navigationOptions: {
      header: null
    }
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent("CoffeeNow", () => App);
