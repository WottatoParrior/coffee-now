import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
          label: "Καστανή"
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
      <View style={styles.general}>
        <Text> {this.props.coffeeTypeName} </Text>
        <Text style={styles.options}> Ζάχαρη </Text>
        <View style={{ width: 300 }}>
          <RadioGroup
            radioButtons={this.state.sugar}
            onPress={this._onPressSugar}
            flexDirection="row"
          />
        </View>
        <Text style={styles.options}> Τύπος Ζάχαρης </Text>
        <View style={{ width: 300 }}>
          <RadioGroup
            radioButtons={this.state.sugarType}
            onPress={this._onPressSugarType}
            flexDirection="row"
          />
        </View>
        <Text style={styles.options}> Καφές </Text>
        <View style={{ width: 300 }}>
          <RadioGroup
            radioButtons={this.state.extra}
            onPress={this._onPressExtra}
            flexDirection="row"
          />
        </View>
        <Text style={styles.options}> Γάλα </Text>
        <View style={{ width: 300 }}>
          <RadioGroup
            radioButtons={this.state.milk}
            onPress={this._onPressMilk}
            flexDirection="row"
          />
        </View>
        <View>
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
    flexDirection: "column",
    alignItems: "center"
  },
  options: {
    marginVertical: 10,
    alignSelf: "flex-start"
  }
});
