import React from "react";
import { View, AsyncStorage, AppRegistry } from "react-native";

import OrderComponent from "./components/order";
import Welcome from "./components/welcome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { settings: null };
  }

  componentWillMount() {
    AsyncStorage.getItem("@coffeenow:settings")
      .then(data => {
        console.log(data);
        this.setState({ settings: data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { settings } = this.state;

    if (!settings) {
      return (
        <View>
          <Welcome />
        </View>
      );
    }

    return <OrderComponent {...this.state} />;
  }
}
AppRegistry.registerComponent("CoffeeNow", () => App);
