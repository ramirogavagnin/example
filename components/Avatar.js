import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
//import { Thumbnail, Image } from 'native-base'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Colors from '../constants/Colors'
import Shadows from '../constants/Shadows'

export default function Avatar(props) {
    return (
        <View style={[styles.avatar, Shadows.avatar, props.style]}>
            <Image {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: Colors.backgroundWhiteColor,
    },
})
