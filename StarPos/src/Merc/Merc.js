import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

var {width,height} = Dimensions.get("window");

// import KindItem from './KindItem';

export default class Merc extends Component {

    static navigationOptions: {
        title:'商户'
    };

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={styles.test1}>
                        <Text style={styles.textStyle}>ABC</Text>
                    </View>

                    <View style={styles.test2}></View>
                    <View style={styles.test3}></View>


                </View>
                <View style={styles.testPosition}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'green',
    },

    mainView:{
        marginLeft:15,
        marginRight:15,
        width:width-30,
        height:264,
        backgroundColor:'green',
    },

    firstRow: {
        height:100,
        top:100,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'stretch',
        flexWrap:'wrap'
    },

    test1:{
        width:68,
        height:24,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        backgroundColor:'white',
    },

    textStyle:{
        fontSize:18,
        color:'white',
        backgroundColor:'blue',
    },

    test2:{
        width:40,
        height:24,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        backgroundColor:'white',
    },

    test3:{
        width:100,
        height:24,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        backgroundColor:'white',
    },

    // absolute 表示距离父视图的高，左， relative 表示距离同级上一个试图的高，左
    testPosition:{
        width:60,
        height:60,
        backgroundColor:'white',
        position:'relative',
        top:120,
        left:50,
    }


});
