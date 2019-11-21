import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import { LatoText } from './StyledText'

export default function NotificationsTooltip(props) {
    const { redIcon, whiteText } = Colors
    const { icon } = props

    const styles = StyleSheet.create({
        tooltip: {
            height: icon ? wp(4) : wp(4.5),
            width: icon ? wp(4) : wp(4.5),
            borderRadius: icon ? wp(2) : wp(2.25),
            right: icon ? wp(2.8) : wp(-0.8),
            top: icon ? wp(-1.2) : wp(-0.1),
            padding: icon ? wp(0.2) : wp(0.2),
            position: 'absolute',
            zIndex: 9000,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: redIcon,
        },
        number: {
            fontSize: icon ? wp(2.2) : wp(2.5),
            color: whiteText,
        },
    })
    const { tooltip, number } = styles
    return (
        <View style={[tooltip, icon]}>
            <LatoText style={number} fontWeight="lato-bold">
                10
            </LatoText>
        </View>
    )
}
