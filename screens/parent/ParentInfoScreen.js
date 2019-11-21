import React, { useState, Fragment } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import Styles from '../../constants/Styles'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'
import Layout from '../../constants/Layout'

import { HeaderLeft, HeaderRight } from '../../components/Header'
import { LatoText } from '../../components/StyledText'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import Avatar from '../../components/Avatar'
import EditTooltip from '../../components/EditTooltip'
import Terms from '../../components/Terms'
import PartialDivider from '../../components/PartialDivider'
import Footer from '../../components/Footer'

import AvatarImg from '../../assets/images/default-avatar.png'

import { routes } from '../../utils/routes'

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

export default function ParentInfoScreen(props) {
    const {
        partialDivider,
        greyTitle,
        label,
        paddingRight,
        childrenContainer,
        childrenTitle,
        childrenAvatarWrapper,
        childrenAvatar,
    } = styles
    const {
        name,
        row,
        button,
        buttonText,
        whiteButton,
        whiteButtonText,
        justify,
        spaceBetween,
        marginTop6,
        marginTop12,
        marginBottom3,
        marginBottom6,
    } = Styles
    const { smallIcon, mediumIcon } = Sizes
    return (
        <Fragment>
            <Layout>
                <LatoText style={name} fontWeight={'lato-bold'}>
                    Elizabeth Doe
                </LatoText>
                <PartialDivider style={partialDivider} />
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
                        style={[row, spaceBetween, paddingRight, marginBottom3]}
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
                        style={[row, spaceBetween, paddingRight, marginBottom3]}
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
                    style={[whiteButton, marginTop6, marginBottom3]}
                    onPress={() =>
                        props.navigation.navigate(
                            routes.parentAssessmentQuestions
                        )
                    }
                >
                    <LatoText style={whiteButtonText} fontWeight={'lato-bold'}>
                        ASSESSMENT QUESTIONS
                    </LatoText>
                </Button>

                <View style={[childrenContainer, marginTop6]}>
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

                    <Button style={[button, marginTop12, { width: '100%' }]}>
                        <LatoText style={buttonText} fontWeight={'lato-bold'}>
                            ALL MEDICAL RECORDS
                        </LatoText>
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
    primaryColor,
    backgroundWhiteColor,
    blackText,
    whiteText,
    partialDivider,
    lightGreyText,
} = Colors
const { avatar } = Styles
const { listText } = Sizes
ParentInfoScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: (
        <Fragment>
            <Avatar source={AvatarImg} style={avatar} />
            <EditTooltip />
        </Fragment>
    ),
    headerRight: <HeaderRight {...props} />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: wp(15),
    },
    headerLeftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: wp(3),
    },
    headerRightContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: wp(3),
    },
    headerStyle: {
        height: wp(26),
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
