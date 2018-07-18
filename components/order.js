import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sugar: this.props.sugar,
      sugarType: this.props.sugarType,
      extra: this.props.extra,
      milk: this.props.milk,
      shopId: this.props.shopId,
      productId: this.props.productId
    };
  }

  _onPressButton() {
    fetch("http://192.168.1.5:3000/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shopId: "yourValue",
        productId: "yourOtherValue"
      })
    });
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Button
          onPress={this._onPressButton}
          title="Coffee now"
          rounded={true}
        />
      </View>
    );
  }
}
