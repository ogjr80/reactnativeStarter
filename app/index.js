import React from 'react'; 
import {Platform } from 'react-native'; 

// import Contacts  from './screens/Contacts';
import {Tabs, Drawer} from './config/router'; 

const App = () => {
    if(Platform.OS === 'ios'){
        return <Tabs /> 
    } else {
    return <Drawer /> 
    }
}

export default App; 