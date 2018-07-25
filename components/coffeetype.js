import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class CoffeeType extends React.Component {
  render() {
    return (
      <View style={styles.coffee}>
        <FlatList
          style={{ marginTop: "10%", height: 700 }}
          data={this.props.shopMenu}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props._onPressCoffeeButton(item)}
            >
              <View style={styles.card}>
                <Text style={{ alignItems: "flex-start" }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <View style={{ backgroundColor: "black" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coffee: {
    backgroundColor: "#f9f6f4"
  },
  card: {
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    padding: 10,
    margin: 5,
    height: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderRadius: 3
  }
});
