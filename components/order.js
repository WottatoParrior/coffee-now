import React from "react";
import { View } from "react-native";

export default class OrderComponent extends React.Component {
  render() {
    return <View> HI </View>;
  }
}

// export default class MyExample extends Component {
//   _onPressButton() {
//     fetch("http://192.168.1.5:3000/order", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         shopId: "yourValue",
//         productId: "yourOtherValue"
//       })
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           onPress={this._onPressButton}
//           title="Coffee now"
//           rounded={true}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   buttonContainer: {
//     margin: 40
//   }
// });
