import React, {Component} from 'react';
import {View, Text,Image,StyleSheet} from 'react-native';

export default class StateVC extends Component {
    constructor(props){
        super(props);
        this.state = {
            size:100
        }
    }


    render() {
        let newstyles = {
            backgroundColor:'yellow',
            width:this.state.size,
            height:this.state.size
        };

        return (
            <View style={styles.container}>
                <Text
                    style={styles.tx}
                    onPress={() => {
                    this.setState({
                        size:this.state.size + 10
                    })
                }}>吹气球吹吹吹</Text>
                <Text
                    style={styles.tx}
                    onPress={() => {
                    this.setState({
                        size:this.state.size - 10
                    })
                }}>放气放气</Text>
                <Image style={newstyles}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:100,

    },

    tx:{
        marginTop:20,
        fontSize:22,
    }





});
