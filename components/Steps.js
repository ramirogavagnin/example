import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import STYLES from '../constants/Styles'
import { LatoText } from '../components/StyledText'
import PartialDivider from '../components/PartialDivider'

export default function Steps(props) {
    const {
        row,
        center,
        justify,
        spaceBetween,
        marginTop6,
        marginTop12,
        marginBottom3,
        marginBottom6,
    } = STYLES
    const { primaryColor, greyText } = Colors
    const { border, grey, text, partialDivider } = styles
    const { step, style } = props
    return (
        <View style={[row, center, style]}>
            <View style={border}>
                <LatoText style={text} fontWeight={'lato-bold'}>
                    1
                </LatoText>
            </View>
            <PartialDivider style={[partialDivider, step === 1 && grey]} />
            <View style={[border, step === 1 && grey]}>
                <LatoText
                    style={[text, step === 1 && grey]}
                    fontWeight={'lato-bold'}
                >
                    2
                </LatoText>
            </View>
            <PartialDivider
                style={[partialDivider, (step === 1 || step === 2) && grey]}
            />
            <View style={[border, (step === 1 || step === 2) && grey]}>
                <LatoText
                    style={[text, (step === 1 || step === 2) && grey]}
                    fontWeight={'lato-bold'}
                >
                    3
                </LatoText>
            </View>
            <PartialDivider
                style={[
                    partialDivider,
                    (step === 1 || step === 2 || step === 3) && grey,
                ]}
            />
            <View
                style={[
                    border,
                    (step === 1 || step === 2 || step === 3) && grey,
                ]}
            >
                <LatoText
                    style={[
                        text,
                        (step === 1 || step === 2 || step === 3) && grey,
                    ]}
                    fontWeight={'lato-bold'}
                >
                    4
                </LatoText>
            </View>
        </View>
    )
}
const { primaryColor, greyText, greyIcon } = Colors
const styles = StyleSheet.create({
    border: {
        height: wp(11),
        width: wp(11),
        borderRadius: wp(5.5),
        borderColor: primaryColor,
        borderWidth: wp(0.4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: primaryColor,
    },
    grey: {
        borderColor: greyIcon,
        color: greyText,
    },
    partialDivider: {
        width: wp(10),
        borderWidth: wp(0.2),
        borderColor: primaryColor,
    },
})
