import React from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";
import Catalog from "./catalog";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shops: null, selected: false, shopMenu: null };
    this._onPressButton = this._onPressButton.bind(this);
  }
  _onPressButton = item => {
    this.setState({ selected: true, shopMenu: item.menu.products });
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

  render() {
    const { shops } = this.state;
    const { shopMenu } = this.state;
    if (!shops) {
      return (
        <View>
          <Text> Loading </Text>
        </View>
      );
    }
    if (shopMenu == null) {
      return (
        <View>
          <FlatList
            data={shops}
            renderItem={({ item }) => (
              <Button
                onPress={() => this._onPressButton(item)}
                title={item.name}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={shopMenu}
          renderItem={({ item }) => <Text>{item.name} </Text>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
