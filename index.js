import React from "react";
import { View, Text, AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation";

import Start from "../coffee-now/components/welcome";
import Shops from "./components/shops";
import CoffeeType from "./components/coffeetype";
import Catalog from "./components/catalog";
import Order from "./components/order";

const RootStack = createStackNavigator({
  Home: {
    screen: Start,
    navigationOptions: {
      header: null
    }
  },
  Shops: {
    screen: Shops,
    navigationOptions: {
      header: null
    }
  },
  Coffee: {
    screen: CoffeeType,
    navigationOptions: {
      header: null
    }
  },
  Catalog: {
    screen: Catalog,
    navigationOptions: {
      header: null
    }
  },
  Order: {
    screen: Order,
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
