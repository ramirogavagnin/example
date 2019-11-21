import React, { Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import STYLES from '../constants/Styles'
import Sizes from '../constants/Sizes'

import Card from './Card'
import PartialDivider from './PartialDivider'
import { LatoText } from './StyledText'

import { routes } from '../utils/routes'

export default function FileCard(props) {
    const { blackText, primaryColor, greyIcon, lightGreyText } = Colors

    const { mediumIcon, smallIcon, fileIcon } = Sizes

    const { onPress, record } = props

    const { file, favorite } = record
    const {
        row,
        align,
        spaceBetween,
        center,
        marginRight3,
        marginRight4,
    } = STYLES
    const { dateText, card, title, header, content } = styles

    return (
        <Fragment>
            <Card style={card}>
                <View style={[row, align, spaceBetween, header]}>
                    <View style={[row, align]}>
                        <LatoText style={title} fontWeight={'lato-bold'}>
                            Preview
                        </LatoText>
                    </View>
                    <View style={[row, align]}>
                        <MaterialCommunityIcons
                            name={favorite ? 'heart' : 'heart-outline'}
                            size={wp(smallIcon)}
                            color={favorite ? primaryColor : greyIcon}
                            style={marginRight4}
                        />
                        <Feather
                            name="download"
                            size={wp(smallIcon)}
                            color={greyIcon}
                            style={marginRight4}
                        />

                        <MaterialCommunityIcons
                            name="email-outline"
                            size={wp(smallIcon)}
                            color={primaryColor}
                            onPress={props.onPress}
                        />
                    </View>
                </View>
                <View style={[center, content]}>
                    <MaterialCommunityIcons
                        name="file-pdf"
                        size={wp(fileIcon)}
                        color={greyIcon}
                    />
                </View>
            </Card>
        </Fragment>
    )
}

const { blackText, greyText, backgroundLightGrey } = Colors
const { M_Text, SM_Text, fileCard } = Sizes

const styles = StyleSheet.create({
    dateText: {
        fontSize: wp(SM_Text),
        color: greyText,
        textAlign: 'center',
        marginVertical: wp(5),
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: wp(fileCard),
        width: '100%',
        paddingHorizontal: wp(3),
        paddingBottom: wp(3),
    },
    header: {
        height: '20%',
    },
    content: {
        height: '80%',
        backgroundColor: backgroundLightGrey,
    },
    title: {
        fontSize: wp(M_Text),
        color: blackText,
    },
})
