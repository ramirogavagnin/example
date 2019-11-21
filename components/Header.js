import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import { LatoText } from './StyledText'
import NotificationsTooltip from './NotificationsTootip'

import Icon from '../assets/images/esu-icon.png'

import { routes } from '../utils/routes'

const { whiteText, whiteIcon } = Colors
const { menuIcon, name, nameHeader, titleHeader } = Sizes

export const HeaderTitle = props => {
    const { name, title } = props
    return (
        <View style={styles.container}>
            <LatoText style={styles.name} fontWeight={'lato-bold'}>
                {name}
            </LatoText>
            <LatoText style={styles.title}>{title}</LatoText>
        </View>
    )
}

export const HeaderLeft = props => {
    const { navigation } = props
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <Image source={Icon} />
        </TouchableOpacity>
    )
}

export const HeaderRight = props => {
    const { navigation } = props
    return (
        <View>
            <MaterialCommunityIcons
                name="menu"
                size={wp(menuIcon)}
                color={Colors.whiteIcon}
                onPress={() => navigation.toggleDrawer()}
            />
            <NotificationsTooltip />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: whiteText,
        fontSize: wp(nameHeader),
        paddingBottom: wp(1.5),
    },
    title: {
        color: whiteText,
        fontSize: wp(titleHeader),
        paddingTop: wp(1.5),
    },
})
