import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CardViewWithImage } from "react-native-simple-card-view";
import Loading from "./loading";

export default class Shops extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shops: null };
  }
  render() {
    const { shops } = this.state;
    return (
      <View style={styles.general}>
        <View>{!shops && <Loading />}</View>
        <FlatList
          style={{ height: "98%" }}
          scrollEnabled={true}
          data={this.state.shops}
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
              onPress={() =>
                this.props.navigation.navigate("Coffee", {
                  shopMenu: item.menu.products,
                  shopId: item.id
                })
              }
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  componentDidMount() {
    fetch("https://coffeenow-api.herokuapp.com/shops")
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", responseJson);
        this.setState({ shops: responseJson.data });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  general: {
    alignItems: "center",
    backgroundColor: "#f9f6f4",
    height: "100%"
  }
});
