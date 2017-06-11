import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 


class Settings extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Settings;