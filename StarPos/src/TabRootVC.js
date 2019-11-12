import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';


import {
    createBottomTabNavigator
} from 'react-navigation-tabs';


import Home from './Home/Home';
import Find from './Find/Find';
import Mine from './Mine/Mine';
import Merc from './Merc/Merc';


const TabRouteConfigs = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            headerTitle:'首页',
            tabBarLabel: '首页',
            showIcon:true,
            tabBarIcon: (focused) => {
                if (focused) {
                    return(
                        <Image
                            style={styles.tabIcon}
                            source={require('./img/tabBarSel0.png')}
                        />
                    );
                }

                return(
                    <Image
                        style={styles.tabIcon}
                        source={require('./img/tabBar0.png')}
                    />
                );
            },
        }),
    },

    Find: {
        screen: Find,
        navigationOptions: () => ({
            headerTitle:'发现',
            tabBarLabel: '发现',
            showIcon:true,
            tabBarIcon: (tintColor, focused) => {
                if (focused) {
                    return(
                        <Image
                            style={styles.tabIcon}
                            source={require('./img/tabBarSel1.png')}
                        />
                    );
                }

                return(
                    <Image
                        style={styles.tabIcon}
                        source={require('./img/tabBar1.png')}
                    />
                );
            },
        }),
    },

    Merc: {
        screen: Merc,
        navigationOptions: () => ({
            headerTitle:'发现',
            tabBarLabel: '商户',
            showIcon:true,
            tabBarIcon: (tintColor, focused) => {
                return(
                    <Image
                        style={styles.tabIcon}
                        source={focused? require('./img/tabBarSel2.png') : require('./img/tabBar2.png')}
                    />
                );
            },
        }),
    },

    Mine: {
        screen: Mine,
        navigationOptions: () => ({
            headerTitle:'发现',
            tabBarLabel: '我的',
            showIcon:true,
            tabBarIcon: (tintColor, focused) => {
                return(
                    <Image
                        style={styles.tabIcon}
                        source={focused? require('./img/tabBarSel3.png') : require('./img/tabBar3.png')}
                    />
                );
            },

        }),
    }
};

const TabNavigationConfig = {
    tabBarOptions: {
        activeTintColor: '#25A2F2',
        labelStyle: {
            fontSize: 12,
        },
        style:{
            backgroundColor: '#FFFFFF',
        }
    },
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    backBehavior:'none'
};


const bottom = createBottomTabNavigator(TabRouteConfigs,TabNavigationConfig);
export default createAppContainer(bottom);

// const BottomTabNavigator = createBottomTabNavigator({
//         Home: {
//             screen: Home,
//             navigationOptions: () => ({
//                 headerTitle:'首页',
//                 tabBarLabel: '首页',
//                 tabBarIcon: (focused) => {
//                     if (focused) {
//                         return(
//                             <Image
//                                 style={styles.tabIcon}
//                                 source={require('./img/tabBarSel0.png')}
//                             />
//                         );
//                     }
//
//                     return(
//                        <Image
//                            style={styles.tabIcon}
//                            source={require('./img/tabBar0.png')}
//                        />
//                    );
//                 },
//             }),
//         },
//
//         Find: {
//             screen: Find,
//             navigationOptions: () => ({
//                 headerTitle:'发现',
//                 tabBarLabel: '发现',
//                 tabBarIcon: (tintColor, focused) => {
//                     return(
//                         <Image
//                             style={styles.tabIcon}
//                             source={focused? require('./img/tabBarSel1.png') : require('./img/tabBar1.png')}
//                         />
//                     );
//
//                 },
//             }),
//         },
//
//         Merc: {
//             screen: Merc,
//             navigationOptions: () => ({
//                 headerTitle:'发现',
//                 tabBarLabel: '商户',
//                 tabBarIcon: (tintColor, focused) => {
//                     return(
//                         <Image
//                             style={styles.tabIcon}
//                             source={focused? require('./img/tabBarSel2.png') : require('./img/tabBar2.png')}
//                         />
//                     );
//                 },
//             }),
//         },
//
//         Mine: {
//             screen: Mine,
//             navigationOptions: () => ({
//                 headerTitle:'发现',
//                 tabBarLabel: '我的',
//                 showIcon:true,
//                 tabBarIcon: (tintColor, focused) => {
//                     return(
//                         <Image
//                             style={styles.tabIcon}
//                             source={focused? require('./img/tabBarSel3.png') : require('./img/tabBar3.png')}
//                         />
//                     );
//                 },
//
//             }),
//         },
//     }, {
//         tabBarOptions: {
//             activeTintColor: '#25A2F2',
//             labelStyle: {
//                 fontSize: 12,
//             },
//             style:{
//                 backgroundColor: '#FFFFFF',
//             }
//         },
//     },
// );
//
// const RouteConfig = createStackNavigator({
//     Home:{
//         screen:Home,
//         navigationOptions:() => ({
//             title:"首页"
//         })
//     },
//
//     Find:{
//         screen:Find,
//         navigationOptions:() => ({
//             title:"发现"
//         })
//     },
//
//     Merc:{
//         screen:Merc,
//         navigationOptions:() => ({
//             title:"商户"
//         })
//     },
//
//     Mine:{
//         screen:Mine,
//         navigationOptions:() => ({
//             title:"我的"
//         })
//     },
//     Bottom: {
//         screen:BottomTabNavigator
//     }
// });
//
//
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

// export default createAppContainer(RouteConfig);
