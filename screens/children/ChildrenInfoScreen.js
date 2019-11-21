import React, { useState, Fragment } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { handleCurrentUser } from '../../redux/actions'

import { routes } from '../../utils/routes'

import Layout from '../../constants/Layout'
import Styles from '../../constants/Styles'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

import { LatoText } from '../../components/StyledText'
import { HeaderLeft, HeaderRight, HeaderTitle } from '../../components/Header'
import { Button } from '../../components/Button'
import NavWrapper from '../../components/NavWrapper'
import AvatarRow from '../../components/AvatarRow'
import Card from '../../components/Card'
import Terms from '../../components/Terms'
import PartialDivider from '../../components/PartialDivider'
import ParentTypeText from '../../components/ParentTypeText'
import Footer from '../../components/Footer'
import Avatar from '../../components/Avatar'

import AvatarImg from '../../assets/images/default-avatar.png'

const { M_Text, sideWrap, headerHeight } = Sizes

const items = [{ id: 1 }, { id: 2 }]

const labels = [
    'First Name',
    'Middle',
    'Last Name',
    'Gender',
    'Marital Status',
    'Birth Date',
    'Social Security',
    'Phone (Cell)',
    'Phone (Secondary)',
    'Email',
    'Adress',
    'City',
    'State',
    'Zip Code',
    'Employer',
    'Occupation',
    'Permission',
    'Preferred Lunguage',
]

function ChildrenInfoScreen(props) {
    const {
        name,
        row,
        button,
        buttonText,
        whiteButton,
        whiteButtonText,
        justify,
        spaceBetween,
        marginTop3,
        marginTop6,
        marginTop12,
        marginBottom3,
        marginBottom6,
    } = Styles

    const { smallIcon, mediumIcon } = Sizes

    const {
        partialDivider,
        greyTitle,
        label,
        childrenContainer,
        childrenTitle,
        childrenAvatarWrapper,
        childrenAvatar,
    } = styles

    const { handleCurrentUser, currentChildren, navigation } = props

    return (
        <Fragment>
            <NavWrapper>
                <AvatarRow
                    name={
                        currentChildren.length > 0
                            ? `${currentChildren[0].firstName} ${currentChildren[0].lastName}`
                            : 'Name unavailable'
                    }
                    onPress={() => {
                        navigation.navigate(routes.childrenHome)
                    }}
                    goBack
                />
            </NavWrapper>
            <Layout style={{ paddingTop: wp(5) }}>
                <View style={[row, spaceBetween]}>
                    <LatoText
                        style={[greyTitle, marginBottom6]}
                        fontWeight={'lato-bold'}
                    >
                        PATIENT INFORMATION
                    </LatoText>
                    <Feather
                        name="edit-3"
                        size={wp(smallIcon)}
                        color={Colors.greyIcon}
                        onPress={() => {}}
                    />
                </View>
                {labels.map((item, index) => (
                    <View
                        style={[row, spaceBetween, marginBottom3]}
                        key={index}
                    >
                        <LatoText style={label} fontWeight={'lato-bold'}>
                            {item}:
                        </LatoText>
                        <LatoText style={label} fontWeight={'lato-bold'}>
                            Value
                        </LatoText>
                    </View>
                ))}
                <PartialDivider style={partialDivider} />
                <View style={[row, spaceBetween]}>
                    <LatoText
                        style={[greyTitle, marginBottom6]}
                        fontWeight={'lato-bold'}
                    >
                        REQUESTED SERVICES INFORMATION
                    </LatoText>
                    <Feather
                        name="edit-3"
                        size={wp(smallIcon)}
                        color={Colors.greyIcon}
                        onPress={() => {}}
                    />
                </View>
                {labels.map((item, index) => (
                    <View
                        style={[row, spaceBetween, marginBottom3]}
                        key={index}
                    >
                        <LatoText style={label} fontWeight={'lato-bold'}>
                            {item}:
                        </LatoText>
                        <LatoText style={label} fontWeight={'lato-bold'}>
                            Value
                        </LatoText>
                    </View>
                ))}

                <Button
                    style={[whiteButton, marginTop6, marginBottom6]}
                    onPress={() =>
                        props.navigation.navigate(
                            routes.childrenAssessmentQuestions
                        )
                    }
                >
                    <LatoText style={whiteButtonText} fontWeight={'lato-bold'}>
                        ASSESSMENT QUESTIONS
                    </LatoText>
                </Button>

                <View style={childrenContainer}>
                    <LatoText style={childrenTitle} fontWeight={'lato-bold'}>
                        Childrens
                    </LatoText>
                    {items &&
                        items.map((item, index) => (
                            <View style={childrenAvatarWrapper} key={index}>
                                <Avatar
                                    source={AvatarImg}
                                    style={childrenAvatar}
                                />
                            </View>
                        ))}

                    <MaterialCommunityIcons
                        name="plus"
                        size={wp(mediumIcon)}
                        style={marginBottom3}
                        color={Colors.primaryColor}
                    />
                    <Button
                        style={[button, marginTop12, { width: '100%' }]}
                        onPress={() =>
                            navigation.navigate(routes.childrenRecords)
                        }
                    >
                        <LatoText style={buttonText} fontWeight={'lato-bold'}>
                            ALL MEDICAL RECORDS
                        </LatoText>
                    </Button>
                    {/*   <ParentTypeText
                        type="Mother"
                        name="Elizabeth Doe"
                        onPress={() => handleCurrentUser({ ...props })}
                    />
                    */}
                </View>
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
    partialDivider,
    lightGreyText,
} = Colors

const { listText } = Sizes
ChildrenInfoScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: (
        <HeaderTitle {...props} name={'Elizabeth Doe'} title={'MOTHER'} />
    ),
    headerRight: <HeaderRight {...props} />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
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
    label: {
        fontSize: wp(listText),
        color: blackText,
        textAlign: 'left',
    },
    greyTitle: {
        fontSize: wp(listText),
        color: lightGreyText,
        textAlign: 'left',
    },
    partialDivider: {
        marginTop: wp(8),
        marginBottom: wp(5),
        width: '100%',
        borderColor: primaryColor,
    },
    childrenContainer: {
        marginHorizontal: wp(-6),
        paddingHorizontal: wp(6),
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingVertical: wp(8),
        backgroundColor: backgroundWhiteColor,
    },
    childrenTitle: {
        fontSize: wp(4.5),
        width: wp(30),
        color: blackText,
        textAlign: 'left',
        marginBottom: wp(3),
        marginRight: wp(5),
    },
    childrenAvatarWrapper: {
        marginRight: wp(4),
        marginBottom: wp(3),
    },
    childrenAvatar: {
        height: wp(10),
        width: wp(10),
        borderRadius: wp(5.5),
    },
})

const mapStateToProps = state => {
    return {
        currentChildren: state.currentChildren,
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = {
    handleCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenInfoScreen)
