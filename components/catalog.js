import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

import Order from "./order";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sugar: [
        {
          label: "Γλυκός"
        },
        {
          label: "Μέτριος"
        },
        {
          label: "Σκέτος"
        }
      ],
      sugarType: [
        {
          label: "Κανονική"
        },
        {
          label: "Μαύρη"
        },
        {
          label: "Ζαχαρίνη"
        }
      ],
      extra: [
        {
          label: "Κανονικός"
        },
        {
          label: "Decaffeine"
        }
      ],
      milk: [
        {
          label: "Χωρίς Γάλα"
        },
        {
          label: "Γάλα"
        }
      ]
    };
  }
  _onPressButton = () => {
    this.setState({ visible: true });
  };
  _onPressSugar = sugar => this.setState({ sugar });
  _onPressSugarType = sugarType => this.setState({ sugarType });
  _onPressExtra = extra => this.setState({ extra });
  _onPressMilk = milk => this.setState({ milk });

  render() {
    let selectedButtonSugar = this.state.sugar.find(e => e.selected == true);
    let selectedButtonSugarType = this.state.sugarType.find(
      e => e.selected == true
    );
    let selectedButtonExtra = this.state.extra.find(e => e.selected == true);
    let selectedButtonMilk = this.state.milk.find(e => e.selected == true);

    selectedButtonSugar = selectedButtonSugar
      ? selectedButtonSugar.value
      : this.state.sugar[0].label;
    selectedButtonSugarType = selectedButtonSugarType
      ? selectedButtonSugarType.value
      : this.state.sugarType[0].label;
    selectedButtonExtra = selectedButtonExtra
      ? selectedButtonExtra.value
      : this.state.extra[0].label;
    selectedButtonMilk = selectedButtonMilk
      ? selectedButtonMilk.value
      : this.state.milk[0].label;
    console.log(
      selectedButtonSugar,
      selectedButtonSugarType,
      selectedButtonExtra,
      selectedButtonMilk
    );
    if (this.state.visible) {
      return (
        <Order
          sugar={selectedButtonSugar}
          sugarType={selectedButtonSugarType}
          milk={selectedButtonMilk}
          extra={selectedButtonExtra}
          shopId={this.props.shopId}
          productId={this.props.productId}
        />
      );
    }
    return (
      <View style={styles.page}>
        <View style={styles.general}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => Actions.home({})}>
              <Text> Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}> {this.props.coffeeTypeName} </Text>
          </View>
          <Text style={styles.options}> Ζάχαρη </Text>
          <RadioGroup
            radioButtons={this.state.sugar}
            onPress={this._onPressSugar}
            flexDirection="row"
          />
          <Text style={styles.options}> Τύπος Ζάχαρης </Text>
          <View>
            <RadioGroup
              radioButtons={this.state.sugarType}
              onPress={this._onPressSugarType}
              flexDirection="row"
            />
          </View>
          <Text style={styles.options}> Καφές </Text>
          <RadioGroup
            radioButtons={this.state.extra}
            onPress={this._onPressExtra}
            flexDirection="row"
          />
          <Text style={styles.options}> Γάλα </Text>
          <RadioGroup
            radioButtons={this.state.milk}
            onPress={this._onPressMilk}
            flexDirection="row"
          />
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.button}
            onPress={this._onPressButton}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>
              ETΟΙΜΟΣ Ο ΚΑΦΕΣ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "800",
    fontSize: 18,
    alignSelf: "center",
    justifyContent: "center",
    color: "#212121"
  },

  page: {
    backgroundColor: "#f9f6f4",
    height: "100%"
  },
  general: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    margin: 8,
    shadowColor: "#000000",
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    margin: 10,
    borderRadius: 10,
    width: "94%",
    backgroundColor: "white",
    elevation: 3,
    paddingBottom: 80
  },
  options: {
    marginVertical: 10,
    alignSelf: "flex-start",
    fontWeight: "600",
    paddingLeft: -5,
    color: "#494949"
  },
  button: {
    alignSelf: "center",
    marginTop: 60,
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
