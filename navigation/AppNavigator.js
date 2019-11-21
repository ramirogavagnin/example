import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthLoadingScreen from '../screens/common/AuthLoadingScreen'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            Auth: AuthStack,
            App: AppStack,
        },
        { initialRouteName: 'Auth' }
    )
)
