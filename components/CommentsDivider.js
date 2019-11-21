import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import { LatoText } from './StyledText'
import PartialDivider from './PartialDivider'

export default function CommentsDivider(props) {
    const { commentsContainer, commentsText, partialDivider } = styles

    const { style } = props

    return (
        <View style={[commentsContainer, style]}>
            <PartialDivider style={partialDivider} />
            <LatoText style={commentsText} fontWeight={'lato-bold'}>
                Comments
            </LatoText>
            <PartialDivider style={partialDivider} />
        </View>
    )
}

const { blackText, backgroundWhiteColor } = Colors
const { sideWrap, M_Text } = Sizes

const styles = StyleSheet.create({
    commentsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: wp(8),
    },
    commentsText: {
        fontSize: wp(M_Text),
        color: blackText,
        width: '33.3%',
        textAlign: 'center',
    },
    partialDivider: {
        width: '33.3%',
    },
})
