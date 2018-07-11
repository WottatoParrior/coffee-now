import React from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";

export default class Catalog extends React.Component {
  render() {
    return (
      <View>
        <Text> {this.props.coffeeTypeName} </Text>
        <Text> Ζαχαρη </Text>
        <Text> Ειδος ζαχαρης </Text>
        <Text> Extra </Text>
        <Text> Decaff </Text>
        <Text> Special instructions </Text>
      </View>
    );
  }
}
