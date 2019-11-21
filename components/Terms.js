import React, { Fragment } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { LatoText } from './StyledText'
import Colors from '../constants/Colors'

export default function Terms(props) {
    const { blackText } = Colors
    const { text, container } = styles
    return (
        <View style={[container, props.style]}>
            <LatoText style={text}>
                Privacy Policy - Terms And Conditions
            </LatoText>
            <LatoText style={[text, { color: blackText, marginTop: wp(2) }]}>
                Copiright © 2019 - Exclusive Surgeries Solutions
            </LatoText>
        </View>
    )
}
const { primaryColor } = Colors
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    text: {
        color: primaryColor,
        fontSize: wp(3),
        textAlign: 'center',
    },
})
