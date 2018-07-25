import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";

import Catalog from "./catalog";
import Shops from "./shops";
import CoffeeType from "./coffeetype";
import Loading from "./loading";

export default class Parent extends React.Component {
  render() {
    return <Settings />;
  }
}

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: null,
      shopMenu: null,
      coffeeTypeName: null,
      shopId: null,
      coffeeTypeVisible: null
    };
    this._onPressButton = this._onPressButton.bind(this);
    this._onPressCoffeeButton = this._onPressCoffeeButton.bind(this);
  }

  render() {
    const { shops } = this.state;
    const { shopMenu } = this.state;
    const { coffeeTypeName } = this.state;
    const { coffeeTypeVisible } = this.state;
    return (
      <View styles={{ height: "100%" }}>
        {!shops && <Loading />}
        {shopMenu == null && (
          <Shops
            shops={this.state.shops}
            _onPressButton={this._onPressButton}
          />
        )}
        {coffeeTypeVisible == true && (
          <CoffeeType
            shopMenu={this.state.shopMenu}
            _onPressCoffeeButton={this._onPressCoffeeButton}
          />
        )}
        {coffeeTypeName && (
          <Catalog
            coffeeTypeName={this.state.coffeeTypeName}
            shopId={this.state.shopId}
            productId={this.state.productId}
          />
        )}
      </View>
    );
  }
  _onPressButton = item => {
    this.setState({
      shopMenu: item.menu.products,
      shopId: item.id,
      shop: null,
      coffeeTypeVisible: true
    });
  };
  _onPressCoffeeButton = item => {
    this.setState({
      coffeeTypeName: item.name,
      productId: item.id,
      coffeeTypeVisible: null
    });
  };
  componentDidMount() {
    fetch("https://coffeenow-api.herokuapp.com/shops")
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", responseJson);
        this.setState({ shops: responseJson.data });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
