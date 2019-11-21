import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Shadows from '../constants/Shadows'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default function NavWrapper(props) {
    const { children, style } = props

    return <View style={[styles.nav, Shadows.filter, style]}>{children}</View>
}

const { sideWrap } = Sizes

const styles = StyleSheet.create({
    nav: {
        backgroundColor: Colors.backgroundWhiteColor,
        flexDirection: 'column',
        paddingHorizontal: wp(sideWrap),
    },
})
