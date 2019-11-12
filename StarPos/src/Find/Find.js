import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

export default class Finder extends Component {

    static navigationOptions: {
        title:''
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.vs}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("FindDetail");
                    }}>
                        <Image
                            style={styles.img}
                            source={require("./img/dongjieban.png")} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.vs}>
                    <Image
                        style={styles.img}
                        source={require("./img/educhaxun.png")}>
                    </Image>
                </View>
                <View style={styles.vs}>
                    <Image
                        style={styles.img}
                        source={require("./img/jiejiari.png")}>
                    </Image>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#F9F9F9'
    },

    vs: {
        height:90,
        marginHorizontal:15,
        marginVertical:5
    },

    img:{
        width:'100%',
        height:'100%',
        resizeMode: "cover",
    }
});
