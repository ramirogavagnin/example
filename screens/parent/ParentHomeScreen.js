import React, { useState, Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { handleCurrentChildren } from '../../redux/actions'

import { routes } from '../../utils/routes'

import Sizes from '../../constants/Sizes'
import Colors from '../../constants/Colors'
import Styles from '../../constants/Styles'

import { LatoText } from '../../components/StyledText'
import { HeaderLeft, HeaderRight } from '../../components/Header'
import Avatar from '../../components/Avatar'
import Terms from '../../components/Terms'
import Layout from '../../constants/Layout'
import { Button } from '../../components/Button'
import Footer from '../../components/Footer'

import AvatarImg from '../../assets/images/default-avatar.png'

function ParentHomeScreen(props) {
    const { name, button, buttonText, marginTop4, marginTop6 } = Styles

    const {
        nameContainer,
        infoText,
        childrenContainer,
        childrenTitle,
        childrenAvatarWrapper,
        childrenAvatar,
        addButton,
    } = styles
    const { mediumIcon } = Sizes
    const { primaryColor } = Colors
    const { navigation, childrens, handleCurrentChildren, currentRole } = props

    return (
        <Fragment>
            <Layout>
                <TouchableOpacity
                    style={nameContainer}
                    onPress={() => navigation.navigate(routes.parentInfo)}
                    activeOpacity={0.8}
                >
                    <LatoText style={name} fontWeight={'lato-bold'}>
                        Elizabeth Doe
                    </LatoText>
                    <LatoText style={infoText}>Age - Height</LatoText>
                </TouchableOpacity>

                <Button
                    style={[button, marginTop6]}
                    onPress={() =>
                        navigation.navigate(routes.parentCriticalData)
                    }
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        CRITICAL DATA
                    </LatoText>
                </Button>
                <Button
                    style={[button, marginTop6]}
                    onPress={() => navigation.navigate(routes.parentInfo)}
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        BASIC INFORMATION
                    </LatoText>
                </Button>
                <Button
                    style={[button, marginTop6]}
                    onPress={() => navigation.navigate(routes.parentRecords)}
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        ALL MEDICAL RECORDS
                    </LatoText>
                </Button>

                <View style={childrenContainer}>
                    <LatoText style={childrenTitle} fontWeight={'lato-bold'}>
                        My Childrens
                    </LatoText>
                    {childrens.length > 0 &&
                        childrens.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    handleCurrentChildren({
                                        ...props,
                                        _id: item._id,
                                    })
                                }
                                activeOpacity={0.8}
                            >
                                <View style={childrenAvatarWrapper}>
                                    <Avatar
                                        source={AvatarImg}
                                        style={childrenAvatar}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    <Button style={addButton}>
                        <MaterialCommunityIcons
                            name="plus"
                            size={wp(mediumIcon - 1)}
                            color={primaryColor}
                        />
                    </Button>
                </View>
            </Layout>
            <Footer />
        </Fragment>
    )
}

const {
    gradientStart,
    gradientMiddle,
    greyIcon,
    primaryColor,
    backgroundWhiteColor,
    blackText,
    whiteText,
} = Colors

const { avatar, smallIcon } = Styles
const { sideWrap, M_Text, cardText, headerHeight } = Sizes

ParentHomeScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: <Avatar source={AvatarImg} style={avatar} />,
    headerRight: <HeaderRight {...props} />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp(15),
    },
    headerLeftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: wp(sideWrap),
    },
    headerRightContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: wp(sideWrap),
    },
    headerStyle: {
        height: wp(headerHeight),
    },
})

const styles = StyleSheet.create({
    nameContainer: {
        alignItems: 'center',
    },

    infoText: {
        fontSize: wp(M_Text),
        color: primaryColor,
        textAlign: 'center',
        paddingTop: wp(2),
    },

    childrenContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingVertical: wp(10),
    },
    childrenTitle: {
        fontSize: wp(4.5),
        width: wp(32),
        color: blackText,
        textAlign: 'left',
        marginBottom: wp(3),
        marginRight: wp(3),
    },
    childrenAvatarWrapper: {
        marginRight: wp(2.5),
        marginBottom: wp(3),
    },
    childrenAvatar: {
        height: wp(10),
        width: wp(10),
        borderRadius: wp(5),
    },
    addButton: {
        backgroundColor: backgroundWhiteColor,
        height: wp(11),
        width: wp(11),
        borderRadius: wp(5.5),
        marginBottom: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const mapStateToProps = state => {
    return {
        childrens: state.childrens,
        currentChildren: state.currentChildren,
        currentRole: state.currentRole,
    }
}

const mapDispatchToProps = {
    handleCurrentChildren,
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentHomeScreen)
