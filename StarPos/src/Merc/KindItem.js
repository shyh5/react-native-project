import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class KindItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.kindView}></View>
                <Text>商户管理</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },

    kindView: {
        backgroundColor: 'cyan',
        width: 50,
        height: 50,
    },

    btn: {
        height: 50,
        width: 150,
        borderRadius: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
    },

    btnTitle: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },

    btnGroup: {
        backgroundColor: 'cyan',
    },

});
