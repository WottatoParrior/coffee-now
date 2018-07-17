import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  Button,
  Image
} from "react-native";
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
      <View style={styles.general}>
        <View>
          <Image
            style={{ marginLeft: 15, marginTop: -40 }}
            source={require("../assets/img/logo.png")}
          />
        </View>
        <View style={{ height: 300 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.button}
            onPress={this._onPressButton}
          >
            <Text style={{ alignSelf: "center" }}> ΦΤΙΑΞΕ ΤΟΝ ΚΑΦΕ ΣΟΥ </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  general: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  button: {
    backgroundColor: "#af7c57",
    width: 260,
    height: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    borderRadius: 3
  }
});
