import React, {Component} from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 


class Search extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <Text>Search Screen</Text>
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
export default Search;