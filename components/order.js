import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

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
      <View style={styles.general}>
        <View
          style={{
            width: 200,
            shadowColor: "#000",
            shadowOffset: { width: 100, height: 20 },
            elevation: 10,
            height: 200,
            borderRadius: 200,
            backgroundColor: "#a37656"
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this._onPressButton()}
          >
            <Image
              style={styles.image}
              source={require("../assets/img/coffeenow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  general: {
    height: "100%",
    paddingTop: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f6f4"
  },

  image: {
    alignSelf: "center",
    borderRadius: 5000,
    height: 195,
    width: 195
  }
});
