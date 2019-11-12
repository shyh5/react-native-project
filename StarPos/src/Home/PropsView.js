import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class PropsView extends Component {
    /*属性默认值*/
    static defaultProps = {
        name:"小明",
        age:20,
    };

    render() {
        return (
            <View>
                <Text style={styles.tx}>姓名：{this.props.name}</Text>
                <Text style={styles.tx}>年龄：{this.props.age}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    tx:{
        fontSize:21,
        color:'white',
        backgroundColor:'cyan',
    }

});
