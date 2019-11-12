import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class FlexOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.vc}>
                    <Text style={styles.txt}>1</Text>
                </View>
                <View style={styles.vc3}>
                    <Text style={styles.txt}>2</Text>
                </View>
                <View style={styles.vc}>
                    <Text style={styles.txt}>3</Text>
                </View>
                <View style={styles.vc1}>
                    <Text style={styles.txt}>4</Text>
                </View>
                <View style={styles.vc}>
                    <Text style={styles.txt}>5</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /*讨论一下flex 关键字*/
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },

    txt:{
        fontSize:20,
    },

    /*直观的看出两者的差别*/
    container1:{
        height:200,
        width:200,
        justifyContent: 'space-around',
        backgroundColor:'white',
    },

    vc: {
        height:50,
        width:100,
        backgroundColor:'green',
        margin:5,
    },

    /*后面会用到的两种样式: 其他子view的空白都被这个样式顶没了 */
    vc1 : {
        flex:1,
        // height:50,
        width:200,
        backgroundColor:'black',
    },

    /*flex 值不同等于总的高度，减去其他子控件的高度，剩下的高度所占的比例大小*/
    vc2:{
        flex:2,
        // height:50,
        width:150,
        backgroundColor:'yellow',
    },

    /*alignSelf 修改子视图的alignItem的样式，五种类型
    * auto 遵循父视图的alignItem
    * flex-start flex-end center stretch*/
    vc3:{
        flex:2,
        width:150,
        backgroundColor:'yellow',
        alignSelf:'flex-end',

        borderWidth:5,
        borderColor:'orange',
    },



});
