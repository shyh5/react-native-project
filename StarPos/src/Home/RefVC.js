import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import RefView from './RefView';

export default class RefVC extends Component {
    constructor(props){
        super(props);
        this.state = {
            size:0,
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}
                    onPress={() => {
                        //refs 相当于组件的标记，相当于里面的tag值
                        let size = this.refs.refView.getSize();
                        this.setState({
                            size:size
                        })
                    }}>
                    获取视图的size:{this.state.size}</Text>
                <RefView
                    ref='refView'>
                </RefView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'red',
    },

    txt:{
        fontSize:24,
    }

});
