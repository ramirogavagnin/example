import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'
import Shadows from '../constants/Shadows'
import Sizes from '../constants/Sizes'
import Styles from '../constants/Styles'

export default function Card(props) {
    const { card } = Styles
    const { style } = props
    return (
        <View {...props} style={[card, style, Shadows.card]}>
            {props.children}
        </View>
    )
}
