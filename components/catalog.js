import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { RkButton, RkChoiceGroup, RkChoice } from "react-native-ui-kitten";

export default class Catalog extends React.Component {
  render() {
    return (
      <View>
        <Text> {this.props.coffeeTypeName} </Text>
        <Text> Ειδος ζαχαρης </Text>
        <RkChoiceGroup selectedIndex={2} radio>
          <TouchableOpacity choiceTrigger>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <RkChoice rkType="radio" />
              <Text>Option 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity choiceTrigger>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <RkChoice rkType="radio" />
              <Text>Option 2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity choiceTrigger>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <RkChoice rkType="radio" />
              <Text>Option 3</Text>
            </View>
          </TouchableOpacity>
        </RkChoiceGroup>

        <Text> Extra </Text>
        <Text> Decaff </Text>
        <Text> Special instructions </Text>
      </View>
    );
  }
}
