import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'
import STYLES from '../constants/Styles'

import { LatoText } from './StyledText'

export default function CategoryRow(props) {
    const { marginRight4 } = STYLES
    const { categoryRow, categoryText } = styles
    const { mediumIcon } = Sizes
    const { style, category } = props
    return (
        <View style={[categoryRow, style]}>
            {category.length > 0 ? (
                <LatoText
                    style={[categoryText, marginRight4]}
                    fontWeight={'lato-bold'}
                    numberOfLines={1}
                >
                    {category.map((item, index) => `${item.title}   `)}
                </LatoText>
            ) : (
                <LatoText
                    style={[categoryText, marginRight4]}
                    fontWeight={'lato-bold'}
                >
                    Category unavailable
                </LatoText>
            )}
        </View>
    )
}

const { sideWrap, navRow, M_Text } = Sizes

const styles = StyleSheet.create({
    categoryRow: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        height: wp(navRow),
    },
    categoryText: {
        fontSize: wp(M_Text),
        color: Colors.primaryColor,
        textAlign: 'left',
    },
})
