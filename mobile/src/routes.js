import React from 'react';
import Details from './Pages/Details';
import Incidents from './Pages/Incidents';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ {headerShown:false} }> 
                <AppStack.Screen name='Incidents' component={ Incidents }/>
                <AppStack.Screen name='Details' component={ Details }/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;