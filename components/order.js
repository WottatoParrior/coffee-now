import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  BackHandler,
  ToastAndroid,
  Text
} from "react-native";

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

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show(
      "Χρησιμοποίησε τις ρυθμίσεις για να αλλάξεις την παραγγελία σου",
      ToastAndroid.SHORT
    );
    return true;
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
    const { navigation } = this.props;
    const sugar = navigation.getParam("sugar", "unknown");
    const sugarType = navigation.getParam("sugarType", "unknown");
    const milk = navigation.getParam("milk", "unknown");
    const extra = navigation.getParam("extra", "unknown");
    const shopId = navigation.getParam("shopId", "unknown");
    const productId = navigation.getParam("productId", "unknown");
    const shopMenu = navigation.getParam("shopMenu", "unknown");
    const name = navigation.getParam("name", "not-found");
    return (
      <View style={styles.general}>
        <View
          style={{
            alignSelf: "flex-start",
            padding: 10,
            margin: 5
          }}
        >
          <View style={styles.smallRound}>
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Shops")}
            >
              <Image
                style={{ height: 26, width: 26 }}
                source={require("../assets/img/settings.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground}>
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
        <View style={styles.orderReview}>
          <Text style={styles.orderHeader}> Η παραγγελία σου : </Text>
          <View style={{ flexDirection: "row", margin: 4, padding: 4 }}>
            <Text style={{ color: "#494949", textDecorationLine: "underline" }}>
              {name}
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 10, marginHorizontal: 15 }}>
              {sugar}, {sugarType},{extra},{milk}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  smallRound: {
    height: 50,
    width: 50,
    borderRadius: 300,
    backgroundColor: "#e88b58",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    shadowColor: "#000",
    elevation: 7
  },
  general: {
    height: "100%",
    paddingTop: 0,
    backgroundColor: "#f9f6f4"
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "15%"
  },
  buttonBackground: {
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 100, height: 20 },
    elevation: 10,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#a37656"
  },
  image: {
    alignSelf: "center",
    borderRadius: 5000,
    height: 195,
    width: 195
  },
  orderReview: {
    margin: 8,
    padding: 8,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "white",
    minHeight: "20%"
  },
  orderHeader: {
    color: "#212121",
    fontWeight: "800",
    fontSize: 16
  }
});
