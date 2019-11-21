import React, { useState, Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'

import { connect } from 'react-redux'
import { handleCurrentUser } from '../../redux/actions'

import Sizes from '../../constants/Sizes'
import Colors from '../../constants/Colors'
import Styles from '../../constants/Styles'

import { routes } from '../../utils/routes'
import { LatoText } from '../../components/StyledText'
import { HeaderLeft, HeaderRight } from '../../components/Header'
import Avatar from '../../components/Avatar'
import Terms from '../../components/Terms'
import Layout from '../../constants/Layout'
import { Button } from '../../components/Button'
import Footer from '../../components/Footer'
import ParentTypeText from '../../components/ParentTypeText'

import AvatarImg from '../../assets/images/default-avatar.png'

function ChildrenHomeScreen(props) {
    const { name, button, buttonText, marginTop6 } = Styles

    const { nameContainer, infoText } = styles

    const {
        navigation,
        currentChildren,
        handleCurrentUser,
        currentRole,
        currentChildrenRecord,
    } = props

    const children = currentChildren[0]

    return (
        <Fragment>
            <Layout>
                <TouchableOpacity
                    style={nameContainer}
                    onPress={() => navigation.navigate(routes.childrenInfo)}
                    activeOpacity={0.8}
                >
                    <LatoText style={name} fontWeight={'lato-bold'}>
                        {currentChildren.length > 0
                            ? `${children.firstName} ${children.lastName}`
                            : 'Name unavailable'}
                    </LatoText>
                    <LatoText style={infoText}>Age - Height</LatoText>
                </TouchableOpacity>

                <Button
                    style={[button, marginTop6]}
                    onPress={() =>
                        navigation.navigate(routes.childrenCriticalData)
                    }
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        CRITICAL DATA
                    </LatoText>
                </Button>
                <Button
                    style={[button, marginTop6]}
                    onPress={() => navigation.navigate(routes.childrenInfo)}
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        BASIC INFORMATION
                    </LatoText>
                </Button>
                <Button
                    style={[button, marginTop6]}
                    onPress={() => navigation.navigate(routes.childrenRecords)}
                >
                    <LatoText style={buttonText} fontWeight={'lato-bold'}>
                        ALL MEDICAL RECORDS
                    </LatoText>
                </Button>
                <ParentTypeText
                    type="Mother"
                    name="Elizabeth Doe"
                    onPress={() => handleCurrentUser({ ...props })}
                />
            </Layout>
            <Footer />
        </Fragment>
    )
}

const {
    gradientStart,
    gradientMiddle,
    primaryColor,
    backgroundWhiteColor,
    blackText,
    whiteText,
} = Colors

const { avatar } = Styles
const { sideWrap, M_Text, headerHeight } = Sizes

ChildrenHomeScreen.navigationOptions = props => ({
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
})

const mapStateToProps = state => {
    return {
        currentChildren: state.currentChildren,
        currentChildrenRecord: state.currentChildrenRecord,
        currentRole: state.currentRole,
    }
}

const mapDispatchToProps = {
    handleCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenHomeScreen)
