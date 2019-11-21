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

const assessmentQuestions = [
    {
        question: '1) How would you best describe your race and ethnic group?',
    },
    {
        question: '2) Your physical activity',
    },
    {
        question: '3) Your tobacco usage',
    },
    {
        question: '4) Your drinking habits',
    },
    {
        question: '5) Do you drink alcohol?',
    },
]

const eatingHabitsQuestions = [
    {
        question:
            '6) When choosing food, do you tend to eat high-fat or low-fat items?',
    },
    {
        question:
            '7) When choosing food, do you tend to eat high-fiber or low-fiber items?',
    },
    {
        question:
            '8) When choosing food, do you tend to eat high-salt or low-salt items',
    },
    {
        question:
            '9) How often do you eat sweet, sugar foods in a typical day?',
    },
    {
        question: '10) How many serving of fruits and vegetables a day?',
    },
]

const otherQuestions = [
    {
        question:
            '11) Which of the following medical conditions have you been diagnosed with?',
    },
    {
        question:
            '12) Which of the following preventive and screening services have you had?',
    },
    {
        question:
            '13) Your stress; looking back 3 months how often felt axious or nervous for no good reason?',
    },
    {
        question:
            '14) Your stress; looking back 3 months how often have you felt sad, miserable or depressed?',
    },
    {
        question: '15) Pain — Do you have any body pains? If so, where?',
    },
    {
        question: '16) Your sleep? How many hours daily?',
    },
    {
        question:
            '17) How often do you have difficulty falling asleep or staying asleep?',
    },
    {
        question: '18) When driving in a car, do you wear a seat belt?',
        answer: 'qwe',
    },
    {
        question:
            '19) How do you rate your overall health? Scale Poor to Excellent',
    },
    {
        question:
            '20) How would you rate your happiness & satisfaction with your life? Scale Terrible to Excellent',
    },
]

const items = [{ id: 1 }, { id: 2 }]

for (let a of assessmentQuestions) {
    a.answer = 'Your Answer'
    a.key = Math.floor(Math.random() * 2000)
}

for (let e of eatingHabitsQuestions) {
    e.answer = 'Your Answer'
    e.key = Math.floor(Math.random() * 2000000)
}

for (let o of otherQuestions) {
    o.answer = 'Your Answer'
    o.key = Math.floor(Math.random() * 1000000)
}

function ChildrenAssessmentQuestionsScreen(props) {
    const {
        partialDivider,
        greyTitle,
        label,
        paddingRight,
        childrenContainer,
        childrenTitle,
        childrenAvatarWrapper,
        childrenAvatar,
        addButton,
    } = styles
    const {
        name,
        row,
        button,
        buttonText,
        borderedButton,
        borderedButtonText,
        question,
        answer,
        titleSeparator,
        justify,
        spaceBetween,
        flexStart,
        marginTop4,
        marginTop6,
        marginTop12,
        marginBottom3,
        marginBottom6,
    } = Styles
    const { smallIcon, mediumIcon } = Sizes

    const { navigation, currentChildren } = props

    return (
        <Fragment>
            <Layout>
                <LatoText style={name} fontWeight={'lato-bold'}>
                    {currentChildren.length > 0
                        ? `${currentChildren[0].firstName} ${currentChildren[0].lastName}`
                        : 'Name unavailable'}
                </LatoText>
                <PartialDivider style={partialDivider} />
                <View style={[row, spaceBetween]}>
                    <LatoText style={greyTitle} fontWeight={'lato-bold'}>
                        ASSESSMENT QUESTIONS
                    </LatoText>
                    <Feather
                        name="edit-3"
                        size={wp(smallIcon)}
                        color={Colors.greyIcon}
                        onPress={() => {}}
                    />
                </View>

                {assessmentQuestions.map((item, index) => (
                    <Fragment key={item.key}>
                        <LatoText
                            style={[question, marginTop6]}
                            fontWeight="lato-black"
                        >
                            {item.question}
                        </LatoText>
                        <LatoText
                            style={[answer, marginTop4]}
                            fontWeight="lato-black"
                        >
                            {item.answer}
                        </LatoText>
                    </Fragment>
                ))}
                <LatoText style={titleSeparator} fontWeight={'lato-bold'}>
                    YOU'RE EATING HABITS
                </LatoText>

                <PartialDivider />

                {eatingHabitsQuestions.map((item, index) => (
                    <Fragment key={item.key}>
                        <LatoText
                            style={[question, marginTop6]}
                            fontWeight="lato-black"
                        >
                            {item.question}
                        </LatoText>
                        <LatoText
                            style={[answer, marginTop4]}
                            fontWeight="lato-black"
                        >
                            {item.answer}
                        </LatoText>
                    </Fragment>
                ))}

                <PartialDivider style={marginTop6} />

                {otherQuestions.map((item, index) => (
                    <Fragment key={item.key}>
                        <LatoText
                            style={[question, marginTop6]}
                            fontWeight="lato-black"
                        >
                            {item.question}
                        </LatoText>
                        <LatoText
                            style={[answer, marginTop4]}
                            fontWeight="lato-black"
                        >
                            {item.answer}
                        </LatoText>
                    </Fragment>
                ))}

                <Button
                    style={[borderedButton, marginTop6]}
                    onPress={() => props.navigation.goBack()}
                    bordered
                >
                    <LatoText style={borderedButtonText}>
                        BACK TO PATIENT INFORMATION
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
ChildrenAssessmentQuestionsScreen.navigationOptions = props => ({
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

const mapStateToProps = state => {
    return {
        currentChildren: state.currentChildren,
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = {
    handleCurrentUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChildrenAssessmentQuestionsScreen)
