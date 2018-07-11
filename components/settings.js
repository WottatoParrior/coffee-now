import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Button
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
    this.state = { shops: null, shopMenu: null, coffeeTypeName: null };
    this._onPressButton = this._onPressButton.bind(this);
    this._onPressCoffeeButton = this._onPressCoffeeButton.bind(this);
  }

  render() {
    const { shops } = this.state;
    const { shopMenu } = this.state;
    const { coffeeTypeName } = this.state;
    return (
      <View style={styles.general}>
        {!shops && <Text> Loading </Text>}
        {shops &&
          shopMenu == null && (
            <View style={styles.header}>
              <Text style={{ marginBottom: "5%", alignSelf: "center" }}>
                ΕΠΕΛΕΞΕ ΤΟ ΚΑΤΑΣΤΗΜΑ ΠΟΥ ΣΕ ΕΞΥΠΗΡΕΤΕΙ
              </Text>
              <View style={{ height: "98%" }}>
                <FlatList
                  data={shops}
                  renderItem={({ item }) => (
                    <CardViewWithImage
                      width={300}
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
            </View>
          )}
        {!coffeeTypeName && (
          <FlatList
            data={shopMenu}
            renderItem={({ item }) => (
              <Button
                onPress={() => this._onPressCoffeeButton(item)}
                title={item.name}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
        {coffeeTypeName && (
          <Catalog coffeeTypeName={this.state.coffeeTypeName} />
        )}
      </View>
    );
  }
  _onPressButton = item => {
    this.setState({ shopMenu: item.menu.products });
  };
  _onPressCoffeeButton = item => {
    this.setState({ coffeeTypeName: item.name });
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
    justifyContent: "space-between"
  },
  header: {
    marginTop: "15%"
  }
});
