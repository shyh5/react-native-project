import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HomeDetail extends Component {


    render() {
        let {props} = this.props;
        return (
            <View style={styles.container}>
                <Text>{props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    view1:{
        backgroundColor:'cyan',
        // alignSelf:'flex-end',
        // flexBasis 表示在不伸缩的情况下子容器的原始尺寸。主轴为横向时代表宽度，主轴为纵向时代表高度。
        flexBasis:100,

        height:100,

        // width:120,
        // height:120
    },

    view2:{
        backgroundColor:'red',
        flexBasis: 50,
        height:100,
        // width:80,
        // height:80
    },

    view3:{
        backgroundColor:'blue',
        // alignSelf:'flex-start',
        flexBasis:60,
        height:100,
        // width:100,
        // height:100
    },

});
