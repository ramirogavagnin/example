import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import { LatoText } from './StyledText'

export default function HeaderTitle(props) {
    const { type, name, style } = props
    return (
        <TouchableOpacity
            {...props}
            style={[styles.container, style]}
            activeOpacity={0.8}
        >
            <LatoText style={styles.type} fontWeight={'lato-bold'}>
                {type}:{' '}
            </LatoText>
            <LatoText style={styles.name}>{name}</LatoText>
        </TouchableOpacity>
    )
}

const { blackText, primaryColor } = Colors
const { parentName, parentType } = Sizes

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: wp(5),
    },
    type: {
        color: blackText,
        fontSize: wp(parentType),
    },
    name: {
        color: primaryColor,
        fontSize: wp(parentName),
    },
})
