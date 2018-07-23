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
    backgroundColor: "#663333"
  },
  card: {
    backgroundColor: "#f9f6f4",
    marginVertical: 1,
    padding: 20,
    margin: 8,
    shadowColor: "#000000",
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    margin: 10,
    borderRadius: 10,
    width: 340,
    elevation: 3
  }
});
