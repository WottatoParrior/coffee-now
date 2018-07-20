import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import Catalog from "./catalog";
import { CardViewWithImage } from "react-native-simple-card-view";

export default class App extends React.Component {
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
      shopId: null
    };
    this._onPressButton = this._onPressButton.bind(this);
    this._onPressCoffeeButton = this._onPressCoffeeButton.bind(this);
  }

  render() {
    const { shops } = this.state;
    const { shopMenu } = this.state;
    const { coffeeTypeName } = this.state;
    return (
      <View styles={{ height: "100%" }}>
        {!shops && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#cccccc" />
          </View>
        )}
        {shops &&
          shopMenu == null && (
            <View style={styles.general}>
              <View>
                <Text>ΕΠΕΛΕΞΕ ΤΟ ΜΑΓΑΖΙ ΣΟΥ</Text>
              </View>
              <FlatList
                style={{ height: "93%" }}
                scrollEnabled={true}
                data={shops}
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
          )}
        {!coffeeTypeName && (
          <View style={styles.coffee}>
            <FlatList
              style={{ marginTop: "10%" }}
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
    this.setState({ shopMenu: item.menu.products, shopId: item.id });
  };
  _onPressCoffeeButton = item => {
    this.setState({ coffeeTypeName: item.name, productId: item.id });
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
    backgroundColor: "#663333"
  },
  coffee: {
    backgroundColor: "#663333",
    height: 900
  },
  loading: {
    backgroundColor: "#663333",
    height: "100%",
    paddingTop: "75%"
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
