import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { TextInput, StyleSheet, Platform } from 'react-native'

import Colors from '../constants/Colors'
import Shadows from '../constants/Shadows'
import Sizes from '../constants/Sizes'

const Input = props => {
    const { style } = props

    return <TextInput {...props} style={[styles.input, Shadows.input, style]} />
}
const { inputRadius } = Sizes

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderRadius: wp(inputRadius),
        padding: wp(3.5),
    },
})

export default Input
