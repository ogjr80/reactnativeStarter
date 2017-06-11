import React from 'react'; 
import {Platform} from 'react-native'; 
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'; 
import Icon from 'react-native-vector-icons/Ionicons'; 

//Screens
import Search from '../screens/Search'; 
import Profile from '../screens/Profile';
import Settings from '../screens/Settings'; 


//Drawerbutton in the header
import {DrawerButton} from '../components/Header';

//utility function fo capilization.
import {capitalizeFirstLetter} from '../helpers/string'; 

//left drawer button customization.
const LeftDrawerBuitton = ({navigation}) => {
    if(Platform.OS === 'android'){
        return <DrawerButton onPress={() => navigation.navigate('DrawerOpen')} />
    } else {
        return null; 
    }
}

  const SearchStack = StackNavigator({
    Contacts: {
        screen: Search,
        navigationOptions: (props) => ({
            title: 'Search',
            headerLeft: <LeftDrawerBuitton  {...props}/>
        })
    }, 
});
export const ProfileStack = StackNavigator({
    Profile: {
        screen: Profile, 
         navigationOptions: (props) => ({
             headerTitle: 'Profile',
            headerLeft: <LeftDrawerBuitton  {...props}/>
        })
    }, 
})

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
         navigationOptions: (props) => ({
            headerTitle: 'Settings',
            headerLeft: <LeftDrawerBuitton  {...props}/>
        })
    },
})

export const Tabs = TabNavigator({
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => <Icon name="ios-list" size={35} color={tintColor} />
        }
    },
    Profile: {
        screen: ProfileStack,
         navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add" size={35} color={tintColor} />
        }
    }, 
    Settings: {
        screen: SettingsStack,
         navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => <Icon name="ios-contact" size={35} color={tintColor} />
        }
    }
})


//Drawer navigator implementation. 
export const Drawer = DrawerNavigator({
    Search: {
        screen: SearchStack,
        navigationOptions: {
            drawerLabel: 'Search',
        }
    }, 
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            drawerLabel: 'Profile', 
        }
    }, 
    Settings: {
        screen: SettingsStack,
        navigationOption: {
            drawerLabel: 'Settings'
        }
    }
})

//exports 
export default SearchStack; 