import React from "react";
import { View, Button, Text, Alert, StyleSheet, Image } from "react-native";
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
    // if (this.state.visible) {
    //   return <Settings />;
    // }
    return (
      <View style={styles.general}>
        <Text style={styles.intro}>Welcome </Text>
        <View style={styles.buttonStart}>
          <Button onPress={this._onPressButton} title="Create your coffee" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  general: {
    alignItems: "center",
    justifyContent: "center"
  },
  intro: {
    marginTop: "30%",
    fontSize: 30,
    fontWeight: "600"
  },
  buttonStart: {
    marginTop: "40%"
  }
});
