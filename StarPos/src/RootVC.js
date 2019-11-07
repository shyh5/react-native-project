import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabNavigator from 'react-native-tab-navigator'

import Home from './Home/Home';
import Find from './Find/Find';
import Mine from './Mine/Mine';
import Merc from './Merc/Merc';
// import HomeDetail from './Home/HomeDetail';


// const HomeStack = createStackNavigator({
//     Home:Home,
//     HomeDetail:HomeDetail,
// });
//
// const FindStack = createStackNavigator({
//     Find:Find,
// });
//
// const MercStack = createStackNavigator({
//     Merc:Merc,
// });
//
// const MineStack = createStackNavigator({
//     Mine:Mine,
// });
//
// const stack = createStackNavigator(
//     {
//         Home:HomeStack,
//         Find:FindStack,
//         Merc:MercStack,
//         Mine:MineStack,
//         HomeDetail:HomeDetail
//     },{
//         defaultNavigationOptions:() => ({
//
//         }),
//         tabBarOptions:{
//             activeTintColor:'',
//             inactiveTintColor:''
//         }
//     },
//
//     );
//
//
// const Tabber = createBottomTabNavigator({
//     Home:Home,
//     Find:Find,
//     Merc:Merc,
//     Mine:Mine,
// });
//
// export default createAppContainer(Tabber);

const dataSource = [
    {icon:require('./img/tabBar0.png'),selectedIcon:require('./img/tabBarSel0.png'),tabPage:'Home',tabName:'首页',component:Home},
    {icon:require('./img/tabBar1.png'),selectedIcon:require('./img/tabBarSel1.png'),tabPage:'Find',tabName:'发现',component:Find},
    {icon:require('./img/tabBar2.png'),selectedIcon:require('./img/tabBarSel2.png'),tabPage:'Merc',tabName:'商户',component:Merc},
    {icon:require('./img/tabBar3.png'),selectedIcon:require('./img/tabBarSel3.png'),tabPage:'Mine',tabName:'我的',component:Mine}
    ]

var navigation = null;
type Props = {};
export default class RootVC extends Component{

    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
        this.state = {
            selectedTab:'Home'
        }
    }

    render() {
        let tabViews = dataSource.map((item,i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab===item.tabPage}
                    titleStyle={{color:'black'}}
                    selectedTitleStyle={{color:'#25A2F2'}}
                    renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    tabStyle={{alignSelf:'center'}}
                    onPress = {() => {this.setState({selectedTab:item.tabPage})}}
                    key={i}
                >
                    <item.component  navigation={navigation}/>
                </TabNavigator.Item>
            );
        });

        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={true}
                >
                    {tabViews}
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabIcon:{
        width:23,
        height:23,
    }
});
