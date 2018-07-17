import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }
  render() {
    return (
      <View style={styles.general}>
        <Text> {this.props.coffeeTypeName} fghjgjuhjgj </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  general: {
    flexDirection: "column",
    alignItems: "center"
  }
});
