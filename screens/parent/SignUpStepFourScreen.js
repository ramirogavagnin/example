import React, { Fragment, useState } from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { routes } from '../../utils/routes'

import Styles from '../../constants/Styles'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'
import Shadows from '../../constants/Shadows'

import { LatoText } from '../../components/StyledText'
import Input from '../../components/Input'
import { AvoidingView } from '../../components/AvoidingView'
import { Button } from '../../components/Button'
import Terms from '../../components/Terms'
import Steps from '../../components/Steps'
import Picker from '../../components/Picker'
import SelectQuestions from '../../components/SelectQuestions'
import PartialDivider from '../../components/PartialDivider'
import CustomCheckBox from '../../components/CustomCheckBox'

import Logo from '../../assets/images/logo-login.png'

const check = [
    { label: 'Anxiety' },
    { label: 'Arthritis - Rheumatoid' },
    { label: 'Arthritis' },
    { label: 'Osteo-arthritis' },
    { label: 'Arthritis - Other type' },
    { label: 'Asthma' },
    { label: 'Cancer' },
    { label: 'COPD' },
    { label: 'Depression' },
    { label: 'Diabetes type 1' },
    { label: 'Diabetes type 2' },
    { label: 'High Blood Pressure' },
    { label: 'High Colesterol' },
    { label: 'Migraine Headeaches' },
    { label: 'Osteoporosis' },
    { label: 'Stoke' },
]

const checkTwo = [
    { label: 'Dental examination in the last year' },
    { label: 'Mammogram in the last 2 years' },
    { label: 'Cervical cancer smear (or PAP test) in the last 3 years' },
    { label: 'Bowel cancer screening in the last 2 years' },
    { label: 'Tetanus vaccination in the last 10 years' },
]
for (let checkItem of check) {
    checkItem.key = Math.floor(Math.random() * 1000000)
}
for (let checkItem of checkTwo) {
    checkItem.key = Math.floor(Math.random() * 1000000)
}

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

const eatingHabitsSelect = [
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
]
const eatingHabitsInput = [
    {
        question:
            '9) How often do you eat sweet, sugar foods in a typical day?',
    },
    {
        question: '10) How many serving of fruits and vegetables a day?',
    },
]
const otherInput = [
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
]
const otherSelect = [
    {
        question:
            '17) How often do you have difficulty falling asleep or staying asleep?',
    },
    {
        question: '18) When driving in a car, do you wear a seat belt?',
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

for (let other of otherInput) {
    other.key = Math.floor(Math.random() * 2000000)
}

for (let other of otherSelect) {
    other.key = Math.floor(Math.random() * 20000)
}

export default function SignUpStepFourScreen(props) {
    const [form, setForm] = useState({})
    const [checked, setChecked] = useState({})
    const {
        logo,
        question,
        row,
        align,
        marginTop4,
        marginTop6,
        marginTop8,
        marginTop12,
        marginTop14,
        marginVertical3,
        marginVertical10,
        marginBottom8,
        marginRight6,
    } = Styles

    const {
        container,
        contentContainer,
        title,
        titleSeparator,
        text,
        checkQuestion,
        pickerContainer,
        input,
        button,
        buttonText,
        borderedButton,
        borderedButtonText,
    } = styles

    const { navigation } = props

    return (
        <AvoidingView style={container}>
            <SafeAreaView style={{ backgroundColor: Colors.backgroundColor }} />
            <ScrollView>
                <Image source={Logo} style={[logo, marginTop8]} />
                <View style={contentContainer}>
                    <Steps style={marginVertical10} step={4} />
                    <LatoText style={title} fontWeight={'lato-bold'}>
                        Assassment Questions
                    </LatoText>
                    <LatoText style={[title, text, marginTop4]}>
                        lorem ipsum dolor sit amet,{'\n'} consectetur adipiscing
                        elit.
                    </LatoText>

                    {assessmentQuestions.map((item, index) => (
                        <Fragment key={index}>
                            <LatoText
                                style={[question, marginTop6]}
                                fontWeight="lato-black"
                            >
                                {item.question}
                            </LatoText>
                            <View
                                style={[
                                    pickerContainer,
                                    marginTop4,
                                    Shadows.input,
                                ]}
                            >
                                <SelectQuestions
                                    selectedValue={form[index]}
                                    onValueChange={value =>
                                        setForm({
                                            ...form,
                                            [index.toString()]: value,
                                        })
                                    }
                                />
                            </View>
                        </Fragment>
                    ))}

                    <LatoText style={titleSeparator} fontWeight={'lato-bold'}>
                        YOU'RE EATING HABITS
                    </LatoText>
                    <PartialDivider />

                    {eatingHabitsSelect.map((item, index) => (
                        <Fragment key={index + 1}>
                            <LatoText
                                style={[question, marginTop6]}
                                fontWeight="lato-black"
                            >
                                {item.question}
                            </LatoText>
                            <View
                                style={[
                                    pickerContainer,
                                    marginTop4,
                                    Shadows.input,
                                ]}
                            >
                                <SelectQuestions
                                    selectedValue={form[(index + 1) * 25]}
                                    onValueChange={value =>
                                        setForm({
                                            ...form,
                                            [(
                                                (index + 1) *
                                                25
                                            ).toString()]: value,
                                        })
                                    }
                                />
                            </View>
                        </Fragment>
                    ))}

                    {eatingHabitsInput.map((item, index) => (
                        <Fragment key={index}>
                            <LatoText
                                style={[question, marginTop6]}
                                fontWeight="lato-black"
                            >
                                {item.question}
                            </LatoText>
                            <Input
                                style={[input, marginTop4]}
                                placeholder="Type a Number"
                                keyboardType="numeric"
                                maxLength={2}
                            />
                        </Fragment>
                    ))}

                    <PartialDivider style={marginTop6} />

                    <LatoText
                        style={[question, marginTop6]}
                        fontWeight="lato-black"
                    >
                        11) Which of the following medical conditions have you
                        been diagnosed with?
                    </LatoText>

                    {check.map((item, index) => (
                        <TouchableOpacity
                            key={item.key}
                            style={[row, align, marginTop6]}
                            activeOpacity={0.8}
                            onPress={() => {
                                setChecked({
                                    ...checked,
                                    [item.key]: !checked[item.key],
                                })
                            }}
                        >
                            <CustomCheckBox
                                checked={checked[item.key]}
                                style={marginRight6}
                                onPress={() =>
                                    setChecked({
                                        ...checked,
                                        [item.key]: !checked[item.key],
                                    })
                                }
                            />
                            <LatoText
                                style={checkQuestion}
                                fontWeight="lato-bold-it"
                            >
                                {item.label}
                            </LatoText>
                        </TouchableOpacity>
                    ))}

                    <LatoText
                        style={[question, marginTop6]}
                        fontWeight="lato-black"
                    >
                        12) Which of the following preventive and screening
                        services have you had?
                    </LatoText>

                    {checkTwo.map((item, index) => (
                        <TouchableOpacity
                            key={item.key}
                            style={[row, align, marginTop6]}
                            activeOpacity={0.8}
                            onPress={() => {
                                setChecked({
                                    ...checked,
                                    [item.key]: !checked[item.key],
                                })
                            }}
                        >
                            <CustomCheckBox
                                checked={checked[item.key]}
                                style={marginRight6}
                                onPress={() =>
                                    setChecked({
                                        ...checked,
                                        [item.key]: !checked[item.key],
                                    })
                                }
                            />
                            <LatoText
                                style={checkQuestion}
                                fontWeight="lato-bold-it"
                            >
                                {item.label}
                            </LatoText>
                        </TouchableOpacity>
                    ))}

                    {otherInput.map((item, index) => (
                        <Fragment key={item.key}>
                            <LatoText
                                style={[question, marginTop6]}
                                fontWeight="lato-black"
                            >
                                {item.question}
                            </LatoText>
                            <Input
                                style={[input, marginTop4]}
                                placeholder="Type a Number"
                                keyboardType="numeric"
                                maxLength={2}
                            />
                        </Fragment>
                    ))}

                    {otherSelect.map((item, index) => (
                        <Fragment key={item.key}>
                            <LatoText
                                style={[question, marginTop6]}
                                fontWeight="lato-black"
                            >
                                {item.question}
                            </LatoText>
                            <View
                                style={[
                                    pickerContainer,
                                    marginTop4,
                                    Shadows.input,
                                ]}
                            >
                                <SelectQuestions
                                    selectedValue={form[item.key]}
                                    onValueChange={value =>
                                        setForm({
                                            ...form,
                                            [item.key]: value,
                                        })
                                    }
                                />
                            </View>
                        </Fragment>
                    ))}

                    <Button
                        style={[button, marginTop14]}
                        onPress={() => navigation.navigate(routes.app)}
                        //disabled={name && lastName ? false : true}
                    >
                        <LatoText style={buttonText}>
                            Go to Home Screen
                        </LatoText>
                    </Button>
                    <Button
                        style={[borderedButton, marginTop4]}
                        onPress={() => navigation.navigate(routes.login)}
                        bordered
                    >
                        <LatoText style={borderedButtonText}>
                            Back to Log In
                        </LatoText>
                    </Button>
                    <Terms style={[marginTop4, marginBottom8]} />
                </View>
            </ScrollView>
        </AvoidingView>
    )
}

const {
    name,
    input,
    inputText,
    inputRadius,
    M_Text,
    titleHeader,
    loginButtonText,
} = Sizes
const {
    blackText,
    primaryColor,
    whiteText,
    backgroundColor,
    backgroundWhiteColor,
    greyText,
} = Colors

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    contentContainer: {
        paddingHorizontal: wp(9),
    },
    title: {
        fontSize: wp(name),
        textAlign: 'center',
        color: blackText,
    },
    titleSeparator: {
        fontSize: wp(name - 1),
        textAlign: 'left',
        color: greyText,
        marginTop: wp(8),
        marginBottom: wp(2),
    },
    text: {
        fontSize: wp(M_Text),
        lineHeight: wp(M_Text + 1.5),
    },
    question: {
        fontSize: wp(M_Text + 0.4),
        lineHeight: wp(M_Text + 1.5),
        textAlign: 'left',
        color: blackText,
    },
    checkQuestion: {
        fontSize: wp(M_Text + 0.2),
        color: greyText,
    },
    pickerContainer: {
        height: wp(input),
        borderRadius: wp(inputRadius),
        backgroundColor: backgroundWhiteColor,
        justifyContent: 'center',
    },

    input: {
        height: wp(input),
        marginTop: wp(5),
        fontSize: wp(inputText),
        textAlign: 'center',
        fontFamily: 'lato',
    },

    button: {
        height: wp(input),
        backgroundColor: primaryColor,
        width: '100%',
        padding: wp(5),
        justifyContent: 'center',
    },
    buttonText: {
        color: whiteText,
        fontSize: wp(loginButtonText),
        fontFamily: 'lato-bold',
        textAlign: 'center',
    },
    borderedButton: {
        width: '100%',
        padding: wp(5),
        justifyContent: 'center',
        borderColor: 'transparent',
        color: primaryColor,
    },
    borderedButtonText: {
        color: primaryColor,
        fontSize: wp(loginButtonText - 0.5),
        fontFamily: 'lato-bold',
        textAlign: 'center',
    },
})
