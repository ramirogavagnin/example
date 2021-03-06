import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import { Provider } from 'react-redux'

import { store } from './redux/store'

import AppNavigator from './navigation/AppNavigator'

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        )
    } else {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            lato: require('./assets/fonts/Lato-Regular.ttf'),
            'lato-it': require('./assets/fonts/Lato-Italic.ttf'),
            'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
            'lato-bold-it': require('./assets/fonts/Lato-BoldItalic.ttf'),
            'lato-black': require('./assets/fonts/Lato-Black.ttf'),
        }),
    ])
}

function handleLoadingError(error) {}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true)
}
