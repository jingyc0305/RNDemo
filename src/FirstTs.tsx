import * as React from "react";
import {
  Text,
  View,
  processColor,
  StyleSheet,
  ToolbarAndroid,
  StatusBar
} from "react-native";
import { BarChart } from "react-native-charts-wrapper";
import PeopleDataListComponent from "./PeopleList";
interface MyFirstTsComponetProps {}
interface MyFirstTsComponetState {
  legend: any;
  data: any;
  highlights: any;
  xAxis: any;
  selectedEntry?: any;
}

class MyFirstTsComponet extends React.Component<
  MyFirstTsComponetProps,
  MyFirstTsComponetState
> {
  constructor(props: any) {
    super(props);
  }
  handleSelect(event: any) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null });
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
    }

    console.log(event.nativeEvent);
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
          hidden={false} //是否隐藏状态栏。
          backgroundColor={"#B08C4C"} //状态栏的背景色
          translucent={false} //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
          barStyle="light-content"
        />

        <ToolbarAndroid
          title="图表组件"
          titleColor="#FFFFFF"
          style={styles.toolbar}
        />

        <View style={{ height: 88, backgroundColor: "#B08C4C" }} />
        <View style={styles.chartcontainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 23,
              marginLeft: 15
            }}
          >
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: "#5C8CCE"
              }}
            />
            <Text
              style={{ flex: 1, fontSize: 11, color: "#848485", marginLeft: 8 }}
            >
              医务人员总人数
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginRight: 16
              }}
            >
              <Text style={{ fontSize: 11, color: "#848485" }}>单位: 人</Text>
            </View>
          </View>

          <BarChart
            style={styles.chart}
            data={{
              dataSets: [
                {
                  values: [
                    { y: 26 },
                    { y: 88 },
                    { y: 399 },
                    { y: 322 },
                    { y: 68 },
                    { y: 38 },
                    { y: 103 },
                    { y: 237 },
                    { y: 85 }
                  ],
                  label: "",
                  config: {
                    color: processColor("#5C8CCE"),
                    barShadowColor: processColor("#5C8CCE"),
                    // highlightAlpha: 90,
                    highlightColor: processColor("#5C8CCE")
                  }
                }
              ],

              config: {
                barWidth: 0.5
              }
            }}
            xAxis={{
              drawGridLines: false,
              valueFormatter: [
                "主任医师",
                "副主任医师",
                "主治医师",
                "医师",
                "主任护师",
                "副主任护师",
                "主管护师",
                "初级护师",
                "初级护士"
              ],
              granularityEnabled: true,
              granularity: 1,
              labelRotationAngle: -45,
              position: "BOTTOM",
              drawAxisLine: true
            }}
            yAxis={{
              drawGridLines: false,

              left: {
                gridColor: processColor("#EDEDED"),
                gridLineWidth: 0.5,
                axisMinimum: 0,
                granularity: 5,
                granularityEnabled: true,
                axisLineColor: processColor("#EDEDED"),
                textColor: processColor("#3E434E")
              },

              right: {
                enabled: false
              }
            }}
            animation={{ durationX: 2000 }}
            legend={{
              enabled: false,
              textSize: 14,
              form: "SQUARE",
              formSize: 14,
              xEntrySpace: 10,
              yEntrySpace: 5,
              formToTextSpace: 5,
              wordWrapEnabled: true,
              maxSizePercent: 0.5
            }}
            gridBackgroundColor={processColor("#ffffff")}
            visibleRange={{ x: { min: 4, max: 8 } }}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            doubleTapToZoomEnabled={false}
            highlightEnabled={false}
            onSelect={this.handleSelect.bind(this)}
            // highlights={[{ x: 3 }, { x: 6 }]}
            //onChange={(event: any) => console.log(event.nativeEvent)}
            chartDescription={{ text: "" }}
            scaleEnabled={false}
          />
        </View>
        <View style={styles.listcontainer}>
          <PeopleDataListComponent />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  toolbar: {
    height: 42,
    width: "100%",
    backgroundColor: "#B08C4C"
  },
  chartcontainer: {
    height: 292,
    borderRadius: 5,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    backgroundColor: "white",
    shadowColor: "#F6F6F6",
    flexDirection: "column",
    marginTop: -60,
    marginRight: 10,
    marginLeft: 10
  },
  chart: {
    padding: 16,
    height: 197,
    marginTop: 28
  },
  listcontainer: {
    flex: 1,
    borderRadius: 5,
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    backgroundColor: "white",
    shadowColor: "#F6F6F6",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  }
});

export default MyFirstTsComponet;
