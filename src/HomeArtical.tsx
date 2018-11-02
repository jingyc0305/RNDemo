import * as React from "react";
import { Text, View, StyleSheet, FlatList,Image } from "react-native";


interface HomeArticalProps {
  artical_url?: string;
  page_index?: number;
}
interface HomeArticalStates {
  //文章数据源
  data: string[];
}
/**
 * 首页文章 API来自玩安卓 演示 state简单实用
 */
export default class HomeArtical extends React.Component<
  HomeArticalProps,
  HomeArticalStates
> {
  //页码
  private page_index: number = 0;
  //请求接口
  private artical_url: string = "http://www.wanandroid.com/article/list/";
  //请求url, 默认加载首页文章列表第一页
  private artical_api: string = this.artical_url + this.page_index + "/json";

  private curPage: number = 0;
  constructor(props: HomeArticalProps) {
    super(props);
    //子组件内部属性引用重新赋值 值来自父组件
    this.artical_url = this.props.artical_url
      ? this.props.artical_url
      : this.artical_url;
    this.page_index = this.props.page_index
      ? this.props.page_index
      : this.page_index;
    this.artical_api = this.artical_url + this.page_index + "/json";
    this.state = {
      //数据源
      data: []
    };
  }
  //开始请求数据
  componentDidMount() {
    this.getArticalDatas(0);
  }
  //渲染整哥页面
  public render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
      />
    );
  }
  _keyExtractor = (item: any, index: any) => index.toString();
  //渲染头部 模拟banner
  private renderHeader() {
    return <View style={{ height: 200, width: "100%" }}>
        <Image source={require("./resouse/img_avatar.png")} resizeMode="cover" style={styles.imgesize} />
        <View style={{ flexDirection: "row", marginTop: -18, justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 10 }}>●</Text>
          <Text style={{ color: "white", fontSize: 10, marginLeft: 4 }}>
            ○
          </Text>
          <Text style={{ color: "white", fontSize: 10, marginLeft: 4 }}>
            ○
          </Text>
          <Text style={{ color: "white", fontSize: 10, marginLeft: 4 }}>
            ○
          </Text>
          <Text style={{ color: "white", fontSize: 10, marginLeft: 4 }}>
            ○
          </Text>
        </View>
      </View>;
  }
  //渲染item条目
  private renderItem = (item: any) => {
    return <Text style={{ padding: 12 }}>{item.item.title}</Text>;
  };
  //渲染分割线
  private renderSeparator() {
    return <View style={styles.separator} />;
  }
  //获取数据
  private getArticalDatas(curPage: number) {
    fetch(this.artical_api)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: this.state.data.concat(responseData.data.datas)
        });
      })
      .catch(error => {
        this.setState({});
      });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  separator: {
    height: 0.5,
    backgroundColor: "#C0C0C0",
    marginLeft: 12,
    marginRight: 12
  },
  imgesize:{
      height:200,
      width: "100%",

  }
});
