import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Modal,
    Image,
    Platform,
    TouchableOpacity,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { connect } from 'react-redux'
import { handleOnPressNotification } from '../redux/actions'

import { routes } from '../utils/routes'

import Colors from '../constants/Colors'
import STYLES from '../constants/Styles'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'
import AndroidSafeArea from '../constants/AndroidSafeArea'
import { navigateToScreen, getActiveRouteState } from '../utils/helpers'

import { LatoText } from './StyledText'
import PartialDivider from './PartialDivider'
import RecordsList from './RecordsList'

import Icon from '../assets/images/esu-icon.png'

function NotificationsModal(props) {
    const items = [1, 2, 3, 4, 5, 6]
    const {
        gradient,
        header,
        contentContainer,
        icon,
        notificationsTitleContainer,
        notificationsText,
        partialDivider,
    } = styles

    const { row, spaceBetween, align, paddingRight2 } = STYLES

    const { gradientStart, gradientMiddle, primaryColor, whiteIcon } = Colors

    const { mediumIcon, smallIcon, inputRadius } = Sizes

    const { SafeArea } = AndroidSafeArea

    const { onPress, style, medicalRecords, handleOnPressNotification } = props

    return (
        <Modal animationType="slide" transparent={false} {...props}>
            <LinearGradient
                colors={[gradientStart, gradientMiddle, primaryColor]}
                style={[gradient, style, SafeArea]}
            >
                <SafeAreaView style={header}>
                    <View
                        style={[
                            row,
                            spaceBetween,
                            { paddingTop: Platform.OS === 'ios' ? wp(3) : 0 },
                        ]}
                    >
                        <Image source={Icon} />
                        <View style={[row, align]}>
                            <TouchableOpacity
                                style={paddingRight2}
                                activeOpacity={0.8}
                            >
                                <MaterialCommunityIcons
                                    name="help-circle-outline"
                                    size={wp(mediumIcon - 2.5)}
                                    color={whiteIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onPress}
                                activeOpacity={0.8}
                            >
                                <MaterialCommunityIcons
                                    name="arrow-left"
                                    size={wp(mediumIcon - 1)}
                                    color={whiteIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                <View style={notificationsTitleContainer}>
                    <PartialDivider style={partialDivider} />
                    <LatoText
                        style={notificationsText}
                        fontWeight={'lato-bold'}
                    >
                        Notifications
                    </LatoText>
                    <PartialDivider style={partialDivider} />
                </View>
                <ScrollView contentContainerStyle={contentContainer}>
                    <RecordsList
                        {...props}
                        data={medicalRecords}
                        // onPress={() => {
                        //     navigateToScreen(routes.parentRecordsDetail, {
                        //         ...props,
                        //     })
                        //     onPress()
                        // }}
                        onPress={() => handleOnPressNotification({ ...props })}
                        style={{ color: whiteText }}
                    />
                </ScrollView>
            </LinearGradient>
        </Modal>
    )
}

const { whiteText, backgroundWhiteColor } = Colors
const { sideWrap, M_Text } = Sizes

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        paddingHorizontal: wp(sideWrap + 2),
    },
    header: {
        height: Platform.OS === 'ios' ? hp(10) : hp(5),

        // paddingTop: wp(15),
        //justifyContent: 'center',
        // backgroundColor: 'red',
    },
    content: {
        // height: Platform.OS === 'ios' ? hp(77) : hp(74),
    },
    contentContainer: {
        color: whiteText,
        paddingBottom: wp(8),
    },
    icon: {
        width: wp(15),
        height: wp(15),
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    notificationsTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: wp(7),
        paddingBottom: wp(3),
    },
    notificationsText: {
        fontSize: wp(M_Text),
        color: whiteText,
        width: '33.3%',
        textAlign: 'center',
    },
    partialDivider: {
        width: '33.3%',
        borderColor: whiteText,
    },
})

const mapStateToProps = state => {
    return {
        medicalRecords: state.medicalRecords,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = {
    handleOnPressNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsModal)
