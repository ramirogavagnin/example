import React from 'react'
import { View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'
import Styles from '../constants/Styles'

import Avatar from './Avatar'
import { LatoText } from './StyledText'
import AvatarImg from '../assets/images/default-avatar.png'

export default function AvatarRow(props) {
    const {
        row,
        align,
        spaceBetween,
        marginVertical2,
        avatarRow,
        rowTitle,
    } = Styles
    const { smallIcon } = Sizes
    const { greyIcon, primaryColor } = Colors

    const { style, onPress, goBack, name } = props
    return (
        <View style={[row, align, spaceBetween, marginVertical2, style]}>
            <View style={[row, align]}>
                <Avatar source={AvatarImg} style={avatarRow} />
                {name && <LatoText style={rowTitle}>{name}</LatoText>}
            </View>
            {goBack ? (
                <MaterialCommunityIcons
                    name="arrow-left"
                    size={wp(smallIcon)}
                    color={primaryColor}
                    onPress={onPress}
                />
            ) : (
                <Feather
                    name="edit-3"
                    size={wp(smallIcon)}
                    color={greyIcon}
                    onPress={onPress}
                />
            )}
        </View>
    )
}
