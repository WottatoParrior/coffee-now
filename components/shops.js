import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CardViewWithImage } from "react-native-simple-card-view";

export default class Shops extends React.Component {
  render() {
    return (
      <View style={styles.general}>
        <View>
          <Text>ΕΠΕΛΕΞΕ ΤΟ ΜΑΓΑΖΙ ΣΟΥ</Text>
        </View>

        <FlatList
          style={{ height: "98%" }}
          scrollEnabled={true}
          data={this.props.shops}
          renderItem={({ item }) => (
            <CardViewWithImage
              width={340}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!"
              }
              source={{ uri: "https://placeimg.com/640/480/tech" }}
              title={item.name}
              imageWidth={100}
              imageHeight={100}
              roundedImage={true}
              roundedImageValue={50}
              imageMargin={{ top: 10 }}
              onPress={() => this.props._onPressButton(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  general: {
    alignItems: "center",
    backgroundColor: "#663333",
    height: "100%"
  }
});
