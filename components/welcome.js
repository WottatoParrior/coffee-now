import React from "react";
import { View, Button, Text, Alert } from "react-native";
import Settings from "./settings";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  _onPressButton = () => {
    this.setState({ visible: true });
  };

  render() {
    if (this.state.visible) {
      return <Settings />;
    }
    return (
      <View>
        <Text> WEEEEELCOME </Text>
        <Button onPress={this._onPressButton} title="Start" />
      </View>
    );
  }
}
