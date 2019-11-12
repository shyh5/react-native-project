import React, {Component} from 'react';
import {View, Text, StyleSheet,Image,PixelRatio} from 'react-native';

export default class FindDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cell}>
                    <Image
                        source={require("./img/merchantStore.png")}
                        style={styles.icon}>
                    </Image>
                    <View style={styles.sectionView}>
                        <Text style={styles.title}>咖啡店咖啡店咖啡店咖啡世博店</Text>
                        <Text style={styles.content}>设备类型: 扫码设备</Text>
                        <Text style={styles.content}>状态: 冻结中</Text>
                    </View>
                    <Image
                        source={require("./img/appRight.png")}
                        style={styles.appRight}>
                    </Image>
                </View>

                <View style={styles.cell}>
                    <Image
                        source={require("./img/merchantStore.png")}
                        style={styles.icon}>
                    </Image>
                    <View style={styles.sectionView}>
                        <Text style={styles.title}>LULUCOFE世博店</Text>
                        <Text style={styles.content}>设备类型: 扫码设备</Text>
                        <Text style={styles.content}>状态: 已完成</Text>
                    </View>
                    <Image
                        source={require("./img/appRight.png")}
                        style={styles.appRight}>
                    </Image>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#F9F9F9",
    },

    cell:{
        height:105,
        marginHorizontal:15,
        marginVertical:5,
        backgroundColor: "white",
        flex:0,
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems:'center',
        shadowColor:'rgba(0, 0, 0, 0.12)',
        shadowOffset:{width:0,height:1},
        shadowOpacity:1,
        shadowRadius:9.5,
    },

    icon:{
        height: 20,
        width: 20,
        marginLeft:15,
        marginTop:18,
        marginRight:5,
        alignSelf:'flex-start',
        // resizeMode: "cover",

    },

    appRight:{
        height: 20,
        width:10,
        marginHorizontal:15,
        resizeMode: "cover",
    },

    sectionView:{
        backgroundColor:'white',
        height:75,
        flex: 1,
        marginHorizontal:7,

    },

    title:{
        fontSize:16,
        color:'#666666',
        marginVertical: 4,
    },

    content:{
        fontSize:14,
        color:'#A5A5A5',
        marginVertical: 2,
    },






});
