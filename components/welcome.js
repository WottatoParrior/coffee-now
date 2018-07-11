import React from "react";
import { View, Button, Text, Alert, StyleSheet, Image } from "react-native";
import Settings from "./settings";
import { RkButton, RkChoiceGroup, RkChoice } from "react-native-ui-kitten";

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
      <View style={styles.general}>
        <Image
          style={{ marginLeft: 15 }}
          source={require("../assets/img/logo.png")}
        />
        <View style={styles.buttonStart}>
          <RkButton
            rkType="rounded"
            onPress={this._onPressButton}
            contentStyle={{ alignSelf: "center", paddingRight: 22 }}
            style={styles.button}
          >
            ΦΤΙΑΞΕ ΤΟΝ ΚΑΦΕ ΣΟΥ
          </RkButton>
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
  button: {
    width: "70%",
    height: "30%",
    backgroundColor: "#c67a33"
  }
});
