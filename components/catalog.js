import React from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shop_id: this.props.shopId };
  }
  render() {
    const { shop_id } = this.state;
    console.log(shop_id);

    return (
      <View>
        <Text> {shop_id} </Text>
      </View>
    );
  }
}
