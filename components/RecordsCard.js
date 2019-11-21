import React, { Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { handleFavorite, handleCurrentRecord } from '../redux/actions'

import Colors from '../constants/Colors'
import STYLES from '../constants/Styles'
import Sizes from '../constants/Sizes'

import Card from './Card'
import PartialDivider from './PartialDivider'
import { LatoText } from './StyledText'
import { Button } from './Button'
import NotificationsTooltip from './NotificationsTootip'

import { routes } from '../utils/routes'

const { blackText, primaryColor, greyText } = Colors
const { doubleCard, M_Text, SM_Text } = Sizes

function RecordsCard({
    onPress,
    category,
    file,
    favorite,
    handleFavorite,
    handleCurrentRecord,
    currentRole,
    _id,
}) {
    const { blackText, primaryColor, greyIcon, lightGreyText } = Colors
    const { dateText, card, fileName, type } = styles
    const {
        row,
        align,
        spaceBetween,
        wrap,
        marginRight3,
        marginRight4,
    } = STYLES
    const { mediumIcon, smallIcon } = Sizes
    const { name, url } = file

    const handelOnPress = () => {
        handleCurrentRecord({ _id, currentRole })
        onPress()
    }

    return (
        <Card style={card}>
            <View style={[row, align, spaceBetween]}>
                <View style={[row, align, wrap]}>
                    <MaterialCommunityIcons
                        name="file-pdf"
                        size={wp(smallIcon)}
                        color={blackText}
                        style={marginRight3}
                        onPress={() => {}}
                    />

                    <LatoText
                        style={fileName}
                        fontWeight={'lato-bold'}
                        numberOfLines={1}
                    >
                        {name}
                    </LatoText>
                </View>
                <View style={[row, align]}>
                    <TouchableOpacity
                        onPress={() => handleFavorite({ _id, currentRole })}
                        activeOpacity={0.8}
                    >
                        <MaterialCommunityIcons
                            name={favorite ? 'heart' : 'heart-outline'}
                            size={wp(smallIcon)}
                            color={primaryColor}
                            style={marginRight4}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handelOnPress}
                        activeOpacity={0.8}
                    >
                        <MaterialCommunityIcons
                            name="eye-outline"
                            size={wp(smallIcon)}
                            color={primaryColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <PartialDivider style={styles.partialDivider} />
            <View style={[row, align, spaceBetween]}>
                <View style={[row, align, { width: '68%' }]}>
                    <Feather
                        name="user"
                        size={wp(smallIcon)}
                        color={greyIcon}
                        style={marginRight3}
                    />
                    <LatoText
                        style={type}
                        fontWeight={'lato-bold'}
                        numberOfLines={1}
                    >
                        {category.map((item, index) => `${item.title}   `)}
                    </LatoText>
                </View>
                <View style={[row, align, { width: '32%' }]}>
                    <Feather
                        name="download"
                        size={wp(smallIcon)}
                        color={greyIcon}
                        style={marginRight4}
                    />
                    <View>
                        <Feather
                            name="message-square"
                            size={wp(smallIcon)}
                            color={greyIcon}
                            style={marginRight4}
                        />
                        <NotificationsTooltip icon />
                    </View>
                    <Feather
                        name="share-2"
                        size={wp(smallIcon)}
                        color={greyIcon}
                    />
                </View>
            </View>
        </Card>
    )
}

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
        height: wp(doubleCard),
        width: '100%',
        paddingHorizontal: wp(3),
    },
    fileName: {
        fontSize: wp(M_Text),
        color: blackText,
        width: '70%',
    },
    type: {
        fontSize: wp(SM_Text),
        color: primaryColor,
        width: '80%',
        paddingTop: wp(1),
    },
    partialDivider: {
        width: '100%',
        marginVertical: wp(3),
    },
})

const mapStateToProps = state => {
    return {
        currentRole: state.currentRole,
    }
}

const mapDispatchToProps = {
    handleFavorite,
    handleCurrentRecord,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsCard)
