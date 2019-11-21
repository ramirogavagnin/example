import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'
import STYLES from '../constants/Styles'

import { LatoText } from './StyledText'

export default function FileRow(props) {
    const { marginRight3, marginRight4, row, align } = STYLES
    const { categoryRow, categoryText, fileName } = styles
    const { mediumIcon, smallIcon } = Sizes
    const { blackText, primaryColor } = Colors
    const { style, onPress, email, share, title } = props
    return (
        <View style={[categoryRow, style]}>
            <View style={[row, align]}>
                {!email && (
                    <MaterialCommunityIcons
                        name="file-pdf"
                        size={wp(smallIcon)}
                        color={blackText}
                        style={marginRight3}
                    />
                )}

                <LatoText style={fileName} fontWeight={'lato-bold'}>
                    {title}
                </LatoText>
            </View>
            <View style={[row, align]}>
                {!share && (
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={wp(smallIcon)}
                        color={primaryColor}
                        onPress={onPress}
                    />
                )}
            </View>
        </View>
    )
}

const { sideWrap, navRow, M_Text } = Sizes
const { blackText } = Colors

const styles = StyleSheet.create({
    categoryRow: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: wp(navRow),
    },
    categoryText: {
        fontSize: wp(M_Text),
        color: Colors.primaryColor,
        textAlign: 'left',
    },
    fileName: {
        fontSize: wp(M_Text),
        color: blackText,
    },
})
