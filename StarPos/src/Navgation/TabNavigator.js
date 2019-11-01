import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TabNavigator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>finder 页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
