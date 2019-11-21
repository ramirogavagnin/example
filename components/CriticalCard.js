import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Feather } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Styles from '../constants/Styles'

import Card from './Card'
import PartialDivider from './PartialDivider'
import { LatoText } from './StyledText'

export default function CriticalCard(props) {
    const { greyIcon } = Colors
    const { smallIcon } = Sizes
    const { row, align, spaceBetween, criticalTitle } = Styles

    const { card, comment, user, by } = styles

    return (
        <Card style={card}>
            <View style={[row, spaceBetween]}>
                <LatoText style={criticalTitle} fontWeight="lato-bold">
                    Title: Value
                </LatoText>
                <Feather name="edit-3" size={wp(smallIcon)} color={greyIcon} />
            </View>
            <LatoText style={comment} numberOfLines={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus viverra adipiscing at in.
            </LatoText>
            <PartialDivider style={styles.partialDivider} />
            <LatoText style={user} fontWeight={'lato-bold'}>
                All Medicals Records About Type...
            </LatoText>
        </Card>
    )
}

const { blackText, primaryColor, lightGreyText } = Colors
const { M_Text, SM_Text } = Sizes

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: wp(5),
        paddingVertical: wp(6),
    },
    comment: {
        paddingTop: wp(4),
        fontSize: wp(M_Text),
        color: blackText,
    },
    user: {
        fontSize: wp(SM_Text),
        color: primaryColor,
    },
    partialDivider: {
        width: '100%',
        marginVertical: wp(3),
    },
})
