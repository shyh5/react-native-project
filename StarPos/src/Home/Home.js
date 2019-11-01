import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends Component {

    pushClick = () => {
        this.props.navigation.navigate('HomeDetail');
    };

    componentDidMount(): void {
        console.log("A componentDidMount方法被调用")
    }

    componentWillUnmount(): void {
        console.log("A componentWillUnmount方法被调用")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.pushClick}>
                    <Text style={styles.btnTitle}>点击跳转到下一页</Text>
                </TouchableOpacity>
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
        width: 250,
        borderRadius: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
    },

    btnTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    btnGroup: {
        backgroundColor: 'cyan',
    },

});
