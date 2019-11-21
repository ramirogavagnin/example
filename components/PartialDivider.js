import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'

export default function PartialDivider(props) {
    return <View style={[styles.divider, props.style]} />
}

const styles = StyleSheet.create({
    divider: {
        borderColor: Colors.partialDivider,
        borderWidth: wp(0.1),
    },
})
