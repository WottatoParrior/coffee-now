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
import { CardViewWithImage } from "react-native-simple-card-view";

export default class Parent extends React.Component {
  render() {
    return <Settings />;
  }
}

class Shops extends React.Component {
  render() {
    return (
      <View style={styles.general}>
        <View>
          <Text>ΕΠΕΛΕΞΕ ΤΟ ΜΑΓΑΖΙ ΣΟΥ</Text>
        </View>

        <FlatList
          style={{ height: "98%" }}
          scrollEnabled={true}
          data={this.props.shops}
          renderItem={({ item }) => (
            <CardViewWithImage
              width={340}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
              }
              source={{ uri: "https://placeimg.com/640/480/tech" }}
              title={item.name}
              imageWidth={100}
              imageHeight={100}
              roundedImage={true}
              roundedImageValue={50}
              imageMargin={{ top: 10 }}
              onPress={() => this._onPressButton(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
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
        {!shops && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#cccccc" />
          </View>
        )}
        {shopMenu == null && <Shops shops={this.state.shops} />}
        {coffeeTypeVisible == true && (
          <View style={styles.coffee}>
            <FlatList
              style={{ marginTop: "10%", height: 700 }}
              data={shopMenu}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this._onPressCoffeeButton(item)}
                >
                  <View style={styles.card}>
                    <Text style={{ alignItems: "flex-start" }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
            <View style={{ backgroundColor: "black" }} />
          </View>
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

const styles = StyleSheet.create({
  general: {
    alignItems: "center",
    backgroundColor: "#663333",
    height: "100%"
  },
  coffee: {
    backgroundColor: "#663333"
  },
  loading: {
    backgroundColor: "#663333",
    paddingTop: "75%",
    height: "100%"
  },

  card: {
    backgroundColor: "#f9f6f4",
    marginVertical: 1,
    padding: 20,
    margin: 8,
    shadowColor: "#000000",
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    margin: 10,
    borderRadius: 10,
    width: 340,
    elevation: 3
  }
});
