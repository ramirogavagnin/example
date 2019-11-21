import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Feather } from '@expo/vector-icons'

import Colors from '../constants/Colors'

const { primaryColor, backgroundWhiteColor } = Colors

export default function EditTooltip(props) {
    return (
        <TouchableOpacity style={styles.tooltip}>
            <Feather name="edit-3" size={wp(4)} color={primaryColor} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tooltip: {
        position: 'absolute',
        right: wp(16),
        top: wp(3.7),
        width: wp(8.5),
        height: wp(8.5),
        borderRadius: wp(4.25),
        backgroundColor: backgroundWhiteColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
