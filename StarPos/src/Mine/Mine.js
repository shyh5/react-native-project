import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Mine extends Component {

    static navigationOptions: {
        title:'我的'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Mine 页面</Text>
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
