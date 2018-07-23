import React from "react";
import { AppRegistry } from "react-native";
import { Scene, Stack, Router } from "react-native-router-flux";

import Start from "./app";
import Parent from "./components/settings";
import CoffeeType from "./components/coffeetype";
import Catalog from "./components/catalog";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Start} hideNavBar />
          <Scene key="shops" component={Parent} title="sdsds" />
          <Scene key="coffee" component={CoffeeType} title="something" />
          <Scene key="catalog" component={Catalog} title="doesnt matter" />
        </Stack>
      </Router>
    );
  }
}

AppRegistry.registerComponent("CoffeeNow", () => App);
