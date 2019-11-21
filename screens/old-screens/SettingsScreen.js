import React from 'react'
import { View, Text } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { routes } from '../../utils/routes'

import { HeaderLeft, HeaderRight, HeaderTitle } from '../../components/Header'

export default function SettingsScreen(props) {
    const { navigate } = props.navigation
    return (
        <View>
            <Text>Soy El Settings</Text>
            <Text onPress={() => navigate(routes.parentHome)}>
                Go back Home
            </Text>
        </View>
    )
}

SettingsScreen.navigationOptions = props => ({
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: <HeaderTitle {...props} />,
    headerRight: <HeaderRight {...props} />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLeftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: hp(2),
    },
    headerRightContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: hp(2),
    },
    headerStyle: {
        height: hp(12),
    },
})
