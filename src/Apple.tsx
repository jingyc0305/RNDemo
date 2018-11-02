import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
/**
 * 定义属性接口
 */
interface AppleComponentProps {
  //苹果组件颜色属性
  apple_color: string;
  //苹果组件重量属性
  apple_weight: number;
  //苹果组件价格属性(可空)
  apple_price?: number;
}
interface AppleComponentState {
  //是否改变颜色
  ischange: boolean;
   //苹果数量
  apple_num: number;
}
/**
 * 自定义一个苹果组件
 */
export default class AppleComponent extends React.Component<
  AppleComponentProps,
  AppleComponentState
> {
  // //给属性设定默认的值
  private apple_color: string = "绿色";
  private apple_weight: number = 2.5;
  private apple_price: number = 19.9;

  //构造函数
  constructor(props: AppleComponentProps) {
    super(props);

    this.apple_color = this.props.apple_color;
    this.apple_weight = this.props.apple_weight;
    this.apple_price = this.props.apple_price? this.props.apple_price:this.apple_price

    this.state = {
      ischange: false,
      apple_num : 1
    };
    setInterval(() => {
      this.setState(previousState => {
        return {
          ischange: !previousState.ischange,
          apple_num: previousState.apple_num + 1
        };
      });
    }, 1000);
  }

//   componentDidUpdate(
//     preProps: AppleComponentProps,
//     preState: AppleComponentState
//   ) {
//     this.apple_color = preProps.apple_color;

//     //this.setState({datasource: preProps.datasource})
//   }

  componentDidMount() {}
  render() {
    //什么颜色,由父组件来定 当然也可以自己给自己定义一个默认的样子
    let colorvalue = this.state.ischange ? "#ff0033" : "#000000";
    return (
      <View style={styles.container}>
        <Text style={{ color: colorvalue }}>
          我是一个
          {this.apple_color}
          的苹果组件
        </Text>
        <Text style={{ color: colorvalue }}>
          我的重量是:
          {this.apple_weight}
          kg
        </Text>
        <Text style={{ color: colorvalue }}>
          我的价格是:
          {this.apple_price}元
        </Text>
        <Text style={{ fontSize: 20, margin: 10, color: colorvalue }}>
          {this.state.apple_num}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
