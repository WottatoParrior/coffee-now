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
    this.state = { shops: null, shopMenu: null };
    this._onPressButton = this._onPressButton.bind(this);
  }

  render() {
    const { shops } = this.state;
    const { shopMenu } = this.state;
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
        <FlatList
          data={shopMenu}
          renderItem={({ item }) => <Text>{item.name} </Text>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  _onPressButton = item => {
    this.setState({ shopMenu: item.menu.products });
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
