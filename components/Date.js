import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Styles from '../constants/Styles'

import { LatoText } from './StyledText'

export default function Date(props) {
    const { style, upload, days, date } = props
    const { dateText } = Styles

    if (days) {
        return <LatoText style={[dateText, style]}>{date}</LatoText>
    }

    return (
        <LatoText style={[dateText, style]}>
            <LatoText style={dateText} fontWeight={'lato-bold'}>
                {upload && 'Upload '}Date:
            </LatoText>{' '}
            {date}
        </LatoText>
    )
}
