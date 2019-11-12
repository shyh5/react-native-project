import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PropsView from './PropsView';
import People from './People';
import SuperPeople from './SuperPeople';


export default class PropsVC extends Component {
    constructor(props) {
        super(props);
        this.people = new People("小白",24);
        this.superPeople = new SuperPeople();
    }
    render() {
        /*延展操作符 ...*/
        // let params = {name:"校长",age:35};

        /*解构复制*/
        let {name,age} = this.people;
        // var {name,age} = params;
        return (
            <View style={styles.container}>
                <PropsView {...this.people}></PropsView>
                <PropsView
                    name={name}
                    age={age}>
                </PropsView>
                <Text>{this.people.desription()}</Text>
                <Text>{this.superPeople.desription()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        marginTop:100,
    },


});
