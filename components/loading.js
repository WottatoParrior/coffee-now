import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#cccccc" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "#663333",
    paddingTop: "75%",
    height: "100%"
  }
});
