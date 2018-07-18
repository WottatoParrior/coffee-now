import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
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
      <View contentContainerStyle={styles.general}>
        {!shops && <Text> Loading </Text>}
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
          <View style={styles.general}>
            <FlatList
              style={{ marginTop: "10%" }}
              data={shopMenu}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this._onPressCoffeeButton(item)}
                >
                  <View style={styles.card}>
                    <Text> {item.name} </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
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
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    borderWidth: 0.8,
    borderColor: "#e0e2e5",
    marginVertical: 1,
    width: 350,
    height: 60
  }
});
