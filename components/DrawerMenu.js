import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Alert,
    Text,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { connect } from 'react-redux'
import { handleCurrentChildren, handleCurrentUser } from '../redux/actions'

import { routes } from '../utils/routes'

import Colors from '../constants/Colors'
import STYLES from '../constants/Styles'
import Sizes from '../constants/Sizes'
import Shadows from '../constants/Shadows'
import AndroidSafeArea from '../constants/AndroidSafeArea'

import Avatar from './Avatar'
import { LatoText } from './StyledText'
import { Button } from './Button'
import NotificationsModal from './NotificationsModal'
import UploadModal from './UploadModal'

import { navigateToScreen, getActiveRouteState } from '../utils/helpers'

import AvatarImg from '../assets/images/default-avatar.png'
import Icon from '../assets/images/esu-icon.png'

function DrawerMenu(props) {
    const [modalVisibility, setModalVisibility] = useState({
        notifications: false,
        upload: false,
    })

    const {
        gradient,
        header,
        content,
        logo,
        text,
        name,
        avatar,
        childrenAvatar,
        border,
        button,
        addButton,
    } = styles

    const {
        row,
        spaceBetween,
        align,
        width,
        paddingLeft4,
        paddingRight2,
        paddingRight4,
        marginTop4,
        marginTop6,
    } = STYLES

    const {
        gradientStart,
        gradientMiddle,
        primaryColor,
        whiteIcon,
        menuColor,
    } = Colors

    const { mediumIcon, smallIcon, inputRadius } = Sizes

    const { SafeArea } = AndroidSafeArea

    const { notifications, upload } = modalVisibility

    const {
        navigation,
        childrens,
        handleCurrentChildren,
        handleCurrentUser,
        currentRole,
    } = props

    return (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={[gradient, props.style, SafeArea]}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={header}>
                    <View style={[row, spaceBetween, { height: '45%' }]}>
                        <View style={[row, align]}>
                            <Image source={Icon} />
                            <LatoText
                                style={[text, paddingLeft4]}
                                fontWeight={'lato-bold'}
                            >
                                Contact ESU
                            </LatoText>
                        </View>
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
                                onPress={() => navigation.toggleDrawer()}
                                activeOpacity={0.8}
                            >
                                <MaterialCommunityIcons
                                    name="close"
                                    size={wp(mediumIcon - 1)}
                                    color={whiteIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[row, align, { height: '55%' }]}
                        onPress={
                            () => handleCurrentUser({ ...props })
                            // navigateToScreen(routes.parentHome, { ...props })
                        }
                        activeOpacity={0.8}
                    >
                        <Avatar source={AvatarImg} style={avatar} />
                        <LatoText
                            style={[name, paddingLeft4]}
                            fontWeight={'lato-bold'}
                        >
                            Elizabeth Doe
                        </LatoText>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={content}>
                <View
                    style={[
                        width,
                        align,
                        {
                            height: '48%',
                        },
                    ]}
                >
                    <TouchableOpacity
                        style={[
                            row,
                            align,
                            width,
                            border,
                            {
                                height: '21%',
                            },
                        ]}
                        onPress={() =>
                            navigateToScreen(
                                currentRole.role === 'user'
                                    ? routes.parentInfo
                                    : routes.childrenInfo,
                                { ...props }
                            )
                        }
                        activeOpacity={0.8}
                    >
                        <LatoText style={text} fontWeight={'lato-bold'}>
                            Patient Information
                        </LatoText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            row,
                            align,
                            width,
                            spaceBetween,
                            border,
                            {
                                height: '21%',
                            },
                        ]}
                        onPress={() =>
                            setModalVisibility({
                                ...modalVisibility,
                                notifications: !notifications,
                            })
                        }
                    >
                        <LatoText style={text} fontWeight={'lato-bold'}>
                            Notifications
                        </LatoText>
                        <MaterialCommunityIcons
                            name="arrow-right"
                            style={paddingRight4}
                            size={wp(smallIcon)}
                            color={whiteIcon}
                            onPress={() => {}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            row,
                            align,
                            width,
                            {
                                height: '21%',
                            },
                        ]}
                        onPress={() =>
                            navigateToScreen(
                                currentRole.role === 'user'
                                    ? routes.parentRecords
                                    : routes.childrenRecords,
                                { ...props }
                            )
                        }
                        activeOpacity={0.8}
                    >
                        <LatoText style={text} fontWeight={'lato-bold'}>
                            Medical Records
                        </LatoText>
                    </TouchableOpacity>
                    <View
                        style={[
                            row,
                            align,
                            width,
                            {
                                height: '37%',
                            },
                        ]}
                    >
                        <Button
                            style={[
                                button,
                                width,
                                Shadows.input,
                                { height: '60%' },
                            ]}
                            onPress={() =>
                                setModalVisibility({
                                    ...modalVisibility,
                                    upload: !upload,
                                })
                            }
                        >
                            <LatoText style={text} fontWeight={'lato-bold'}>
                                Add New Medical Record
                            </LatoText>
                            <MaterialCommunityIcons
                                name="plus"
                                size={wp(mediumIcon - 1)}
                                color={whiteIcon}
                            />
                        </Button>
                    </View>
                </View>
                <ScrollView
                    style={{
                        height: '32%',
                        backgroundColor: menuColor,
                        borderRadius: wp(1),
                    }}
                    contentContainerStyle={{
                        padding: wp(3.5),
                    }}
                >
                    <View style={[row, align, spaceBetween]}>
                        <LatoText style={text}>Childrens</LatoText>
                        <Button style={addButton}>
                            <MaterialCommunityIcons
                                name="plus"
                                size={wp(smallIcon - 1)}
                                color={primaryColor}
                                onPress={() => {
                                    setNewItem([
                                        ...items,
                                        {
                                            id: Math.random(),
                                            name: 'Not available',
                                        },
                                    ])
                                }}
                            />
                        </Button>
                    </View>
                    {childrens.length > 0 &&
                        childrens.map((item, index) => (
                            <TouchableOpacity
                                key={item._id}
                                style={[row, align, marginTop4]}
                                onPress={() =>
                                    handleCurrentChildren({
                                        ...props,
                                        _id: item._id,
                                    })
                                }
                                activeOpacity={0.8}
                            >
                                <Avatar
                                    source={AvatarImg}
                                    style={childrenAvatar}
                                />
                                <LatoText
                                    style={[paddingLeft4, text]}
                                    fontWeight={'lato-bold'}
                                >
                                    {item.firstName}
                                </LatoText>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
                <View
                    style={[
                        align,
                        width,
                        {
                            height: '20%',
                        },
                    ]}
                >
                    <TouchableOpacity
                        style={[
                            row,
                            align,
                            width,
                            spaceBetween,
                            border,
                            {
                                height: '45%',
                            },
                        ]}
                        activeOpacity={0.8}
                    >
                        <LatoText style={text} fontWeight={'lato-bold'}>
                            Privacy Policy
                        </LatoText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            row,
                            align,
                            width,
                            {
                                height: '45%',
                            },
                        ]}
                        onPress={() => {
                            navigation.navigate(routes.auth)
                        }}
                        activeOpacity={0.8}
                    >
                        <SimpleLineIcons
                            name="logout"
                            size={wp(smallIcon - 1)}
                            color={whiteIcon}
                        />
                        <LatoText
                            style={[text, paddingLeft4]}
                            fontWeight={'lato-bold'}
                        >
                            Log Out
                        </LatoText>
                    </TouchableOpacity>
                </View>
                <NotificationsModal
                    {...props}
                    onPress={() => {
                        setModalVisibility({
                            ...modalVisibility,
                            notifications: !notifications,
                        })
                    }}
                    visible={notifications}
                />
                <UploadModal
                    title="ADD NEW MEDICAL RECORD"
                    icon="file-pdf"
                    onPress={() => {
                        setModalVisibility({
                            ...modalVisibility,
                            upload: !upload,
                        })
                    }}
                    visible={upload}
                    upload
                />
            </View>
        </LinearGradient>
    )
}

const {
    greenIcon,
    whiteText,
    backgroundWhiteColor,
    primaryColor,
    menuColor,
} = Colors
const {
    sideWrap,
    input,
    inputText,
    inputRadius,
    menuText,
    menuName,
    avatarMenu,
} = Sizes

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        paddingHorizontal: wp(sideWrap + 2),
    },
    header: {
        height: Platform.OS === 'ios' ? hp(19) : hp(22),
    },
    content: {
        height: Platform.OS === 'ios' ? hp(77) : hp(74),
    },
    logo: {
        width: wp(15),
        height: wp(15),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    text: {
        fontSize: wp(menuText),
        color: whiteText,
    },
    avatar: {
        backgroundColor: backgroundWhiteColor,
        height: wp(avatarMenu),
        width: wp(avatarMenu),
        borderRadius: wp(avatarMenu / 2),
    },
    childrenAvatar: {
        backgroundColor: backgroundWhiteColor,
        height: wp(avatarMenu / 1.5),
        width: wp(avatarMenu / 1.5),
        borderRadius: wp(avatarMenu / 3),
    },
    name: {
        fontSize: wp(menuName),
        color: whiteText,
    },
    border: {
        borderBottomColor: menuColor,
        borderBottomWidth: wp(0.4),
    },
    button: {
        backgroundColor: greenIcon,
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
    },
    addButton: {
        backgroundColor: backgroundWhiteColor,
        height: wp(8),
        width: wp(8),
        borderRadius: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const mapStateToProps = state => {
    return {
        childrens: state.childrens,
        currentRole: state.currentRole,
    }
}

const mapDispatchToProps = {
    handleCurrentChildren,
    handleCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu)
