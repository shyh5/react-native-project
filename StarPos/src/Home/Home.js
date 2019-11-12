import React, {Component} from 'react';
import {View, Text, Button,StyleSheet, TouchableOpacity} from 'react-native';



export default class Home extends Component {

    pushClick = () => {
        this.props.navigation.navigate('HomeDetail',{ name: '详情页面'});
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
                    title={"点击跳转到详情"}
                    onPress={this.pushClick}>
                </Button>

                <Button
                title={"跳转到布局视图1"}
                onPress={() => {
                    navigation.navigate("FlexOne");
                }}>
                </Button>

                <Button
                    title={"跳转props 学习"}
                    onPress={() => {
                        navigation.navigate("PropsVC");
                    }}>
                </Button>
                <Button
                    title={"跳转state"}
                    onPress={() => {
                        navigation.navigate("StateVC");
                    }}>
                </Button>

                <Button
                    title={"跳转ref"}
                    onPress={() => {
                        navigation.navigate("RefVC");
                    }}>
                </Button>

                <Button
                    title={"跳转到finder"}
                    onPress={() => {
                        navigation.navigate("Finder");
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
