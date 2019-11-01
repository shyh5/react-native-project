import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './Home/Home';
import Find from './Find/Find';
import Mine from './Mine/Mine';
import Merc from './Merc/Merc';
import HomeDetail from './Home/HomeDetail';


const HomeStack = createStackNavigator({
    Home:Home,
    HomeDetail:HomeDetail,
});

const FindStack = createStackNavigator({
    Find:Find,
});

const MercStack = createStackNavigator({
    Merc:Merc,
});

const MineStack = createStackNavigator({
    Mine:Mine,
});

const stack = createStackNavigator(
    {
        Home:HomeStack,
        Find:FindStack,
        Merc:MercStack,
        Mine:MineStack,
        HomeDetail:HomeDetail
    },{
        defaultNavigationOptions:() => ({

        }),
        tabBarOptions:{
            activeTintColor:'',
            inactiveTintColor:''
        }
    },

    );


const Tabber = createBottomTabNavigator({
    Home:Home,
    Find:Find,
    Merc:Merc,
    Mine:Mine,
});

export default createAppContainer(Tabber);


