import React from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";
import Catalog from "./catalog";

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
      <View>
        {!shops && <Text> Loading </Text>}
        {shops &&
          shopMenu == null && (
            <FlatList
              showsHorizontalScrollIndicator={true}
              data={shops}
              renderItem={({ item }) => (
                <Button
                  onPress={() => this._onPressButton(item)}
                  title={item.name}
                />
              )}
              keyExtractor={item => item.id}
            />
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
