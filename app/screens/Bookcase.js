import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,

}from 'react-native';
export default class Bookcase extends Component {
    static navigationOptions = {
        title: 'Book Case',
      };
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                 Bookcase
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});