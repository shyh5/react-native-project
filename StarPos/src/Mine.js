import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Mine extends PureComponent {

    static navigationOptions = {
        title: '我的',
        headerTitle: '我的'
    };

    componentDidMount(): void {
        console.log("B componentDidMount方法被调用")
    }

    componentWillUnmount(): void {
        console.log("B componentWillUnmount方法被调用")
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.btn}>Mine 页面</Text>
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
