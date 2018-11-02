import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { number } from "prop-types";
//定义属性接口
interface PeopleDataListComponentProps{
   
}
//定义状态接口
interface PeopleDataListComponentState{

}
//定义一个列表组件
class PeopleDataListComponent extends React.Component<PeopleDataListComponentProps,PeopleDataListComponentState>{

    constructor(props:any){
        super(props);
    }
    public render(){
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push({key: i, title: i + ''});
        }
        return(
              <FlatList 
              data={data}
              renderItem={this._renderItem}
              ListHeaderComponent = {this._renderHeader}
              showsVerticalScrollIndicator = {false}
              keyExtractor={(item, index) => index.toString()}
              />
        );
    }
    private _renderHeader = ()=> {
        return (
            <View style={styles.list_header}>
                <Text style={{fontSize:12,marginLeft:50}}>职位</Text>
                <Text style={{fontSize:12,marginRight:50}}>人数</Text>
            </View>
        )
    }
    private _renderItem = (item:any)=> {
        var bgColor = item.index % 2 == 0 ? '#FFFFFF' : '#FCFCFC';
        return (
            <View style={{
                backgroundColor: bgColor,
                flexDirection: "row",
                justifyContent: "space-between",
                height: 36,
                width:'100%',
                alignItems: "center"}}>
                <Text style={{fontSize:11,marginLeft:62}}>{item.index}</Text>
                <Text style={{fontSize:11,marginRight:62}}>{item.item.title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  list_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    height: 33,
    alignItems: "center",
    width:'100%',
  },
  list_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 36,
    alignItems: "center"
  }
});
export default PeopleDataListComponent;