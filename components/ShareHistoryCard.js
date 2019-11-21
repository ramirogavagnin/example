import React, { Fragment } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Styles from '../constants/Styles'
import Sizes from '../constants/Sizes'

import Card from './Card'
import PartialDivider from './PartialDivider'
import { LatoText } from './StyledText'

import { routes } from '../utils/routes'

export default function ShareHistoryCard(props) {
    const {
        blackText,
        primaryColor,
        greyIcon,
        lightGreyText,
        greenIcon,
        yellowIcon,
        redIcon,
    } = Colors
    const { smallIcon } = Sizes
    const { row, align, spaceBetween } = Styles

    const { card, name, partialDivider } = styles

    const { style, status } = props

    return (
        <Card style={[card, style]}>
            <View style={[row, align, spaceBetween]}>
                <LatoText style={name} fontWeight={'lato-bold'}>
                    Elizabeth Doe
                </LatoText>
                <MaterialCommunityIcons
                    name="message-plus"
                    size={wp(smallIcon)}
                    color={greyIcon}
                />
            </View>
            <PartialDivider style={partialDivider} />
            <View style={[row, align, spaceBetween]}>
                <LatoText style={name} fontWeight={'lato-bold'}>
                    To: name@server.com
                </LatoText>
                {status === 'ok' && (
                    <MaterialCommunityIcons
                        name="checkbox-marked-circle-outline"
                        size={wp(smallIcon)}
                        color={greenIcon}
                    />
                )}
                {status === 'warning' && (
                    <MaterialCommunityIcons
                        name="minus-circle-outline"
                        size={wp(smallIcon)}
                        color={yellowIcon}
                    />
                )}

                {status === 'error' && (
                    <MaterialCommunityIcons
                        name="close-circle-outline"
                        size={wp(smallIcon)}
                        color={redIcon}
                    />
                )}
            </View>
        </Card>
    )
}

const { blackText } = Colors
const { doubleCard, M_Text } = Sizes

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: wp(doubleCard),
        paddingHorizontal: wp(3),
    },
    name: {
        fontSize: wp(M_Text),
        color: blackText,
    },

    partialDivider: {
        width: '100%',
        marginVertical: wp(3),
    },
})
