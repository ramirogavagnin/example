import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native'
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

import Logo from '../../assets/images/logo-login.png'

export default function SignUpStepTwoScreen(props) {
    const [form, setFormValue] = useState({
        name: '',
        lastName: '',
        other: '',
        date: '',
    })

    const {
        container,
        contentContainer,
        title,
        text,
        pickerContainer,
        input,
        button,
        buttonText,
        borderedButton,
        borderedButtonText,
    } = styles

    const {
        logo,
        marginTop4,
        marginTop6,
        marginTop8,
        marginTop12,
        marginVertical10,
        marginBottom8,
    } = Styles

    const { name, lastName, date } = form
    const { navigation } = props
    return (
        <AvoidingView style={container}>
            <SafeAreaView style={{ backgroundColor: Colors.backgroundColor }} />
            <ScrollView>
                <Image source={Logo} style={[logo, marginTop8]} />
                <View style={contentContainer}>
                    <Steps style={marginVertical10} step={2} />
                    <LatoText style={title} fontWeight={'lato-bold'}>
                        Create ESurgeries account
                    </LatoText>
                    <LatoText style={[title, text, marginTop4]}>
                        In order to protect your information and{'\n'}serve you
                        better.
                    </LatoText>
                    <Input
                        value={name}
                        style={[input, marginTop6]}
                        placeholder="First Name"
                        onChangeText={text =>
                            setFormValue({ ...form, name: text })
                        }
                    />

                    <Input
                        value={lastName}
                        style={[input, marginTop4]}
                        placeholder="Last Name"
                        onChangeText={text =>
                            setFormValue({ ...form, lastName: text })
                        }
                    />
                    <Input
                        value={lastName}
                        style={[input, marginTop4]}
                        placeholder="Other"
                        onChangeText={text =>
                            setFormValue({ ...form, other: text })
                        }
                    />
                    <View style={[pickerContainer, marginTop4, Shadows.input]}>
                        <Picker
                            onDateChange={newDate =>
                                setFormValue({ ...form, date: newDate })
                            }
                            placeHolderTextStyle={{
                                fontSize: wp(Sizes.inputText),
                                textAlign: 'center',
                                fontFamily: 'lato',
                                color: Colors.lightGreyText,
                            }}
                            textStyle={{
                                fontSize: wp(Sizes.inputText),
                                textAlign: 'center',
                                fontFamily: 'lato',
                                color: Colors.blackText,
                            }}
                        />
                    </View>

                    <Button
                        style={[button, marginTop6]}
                        onPress={() =>
                            navigation.navigate(routes.signUpStepThree)
                        }
                    >
                        <LatoText style={buttonText}>Create Account</LatoText>
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

const { name, input, inputText, inputRadius, M_Text, loginButtonText } = Sizes
const {
    blackText,
    primaryColor,
    whiteText,
    backgroundColor,
    backgroundWhiteColor,
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
    text: {
        fontSize: wp(M_Text),
        lineHeight: wp(M_Text + 1.5),
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
