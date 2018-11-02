import * as React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
//
interface User {
  name: string;
  age?: number;
  sex: string;
}
class MyProps extends React.Component<User> {
  static defaultProps = {
    name: "Jing",
    age:18,
    sex:"男"
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string
  };
  render() {
    return (
      <View style = {{alignSelf:'center'}}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.age}</Text>
        <Text>{this.props.sex}</Text>
      </View>
    );
  }
}
export default MyProps;
