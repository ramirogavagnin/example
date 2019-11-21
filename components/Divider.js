import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'

export default function Divider(props) {
    return <View style={[styles.divider, props.style]}></View>
}

const styles = StyleSheet.create({
    divider: {
        borderColor: Colors.primaryColor,
        borderWidth: hp(0.1),
        width: wp(200),
        zIndex: 9000,
        left: wp(-15),
    },
})
