import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Input from '../components/Input'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

export default function FooterMessage(props) {
    const [search, setSearch] = useState('')
    const { gradientStart, gradientMiddle, primaryColor, whiteIcon } = Colors
    const { mediumIcon } = Sizes
    const { style, message } = props
    const { gradient, input, iconContainer } = styles

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={wp(30)}
            enabled
        >
            <LinearGradient
                colors={[gradientStart, gradientMiddle, primaryColor]}
                style={[gradient, props.style]}
            >
                <Input
                    {...props}
                    style={input}
                    onChangeText={text => setSearch(text)}
                />
                <View style={iconContainer}>
                    {message ? (
                        <MaterialCommunityIcons
                            name="message-plus"
                            size={wp(mediumIcon - 1)}
                            color={whiteIcon}
                            onPress={() => {}}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name="email-outline"
                            size={wp(mediumIcon - 1)}
                            color={whiteIcon}
                            onPress={() => {}}
                        />
                    )}
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

const { blueIcon, greenIcon } = Colors
const { sideWrap, input, inputText, inputRadius } = Sizes

const styles = StyleSheet.create({
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(100),
        height: wp(20),
        paddingHorizontal: wp(sideWrap),
    },
    input: {
        width: wp(70),
        height: wp(input),
        borderBottomLeftRadius: wp(8),
        fontSize: wp(inputText),
        fontFamily: 'lato',
    },
    iconContainer: {
        backgroundColor: greenIcon,
        height: wp(13),
        width: wp(19),
        borderTopLeftRadius: wp(inputRadius),
        borderTopRightRadius: wp(inputRadius),
        borderBottomRightRadius: wp(8),
        borderBottomLeftRadius: wp(inputRadius),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp(3),
    },
})
