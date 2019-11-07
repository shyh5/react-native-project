import React, {Component} from 'react';
import {View, Text, Button,StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends Component {

    pushClick = () => {
        this.props.navigation.navigate('Find');
    };

    componentDidMount(): void {
        console.log("A componentDidMount方法被调用")
    }

    componentWillUnmount(): void {
        console.log("A componentWillUnmount方法被调用")
    }

    static navigationOptions: {
        title:'首页'
    };

    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Button
                    title={"点击跳转到下一页"}
                    onPress={this.pushClick}>
                </Button>

                <Button
                title={"跳转到tabbar"}
                onPress={() => {
                    navigation.navigate("Bottom");
                }}>
                </Button>
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
