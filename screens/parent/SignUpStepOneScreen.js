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

export default function SignUpStepOneScreen(props) {
    const [form, setFormValue] = useState({
        name: '',
        lastName: '',
        date: '',
    })

    const {
        logo,
        marginTop4,
        marginTop6,
        marginTop8,
        marginTop12,
        marginVertical10,
        marginBottom8,
    } = Styles

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

    const { name, lastName, date } = form

    const { navigation } = props
    return (
        <AvoidingView style={container}>
            <SafeAreaView style={{ backgroundColor: Colors.backgroundColor }} />
            <ScrollView>
                <Image source={Logo} style={[logo, marginTop8]} />
                <View style={contentContainer}>
                    <Steps style={marginVertical10} step={1} />
                    <LatoText style={title} fontWeight={'lato-bold'}>
                        Patient Authorization
                    </LatoText>
                    <LatoText style={[title, text, marginTop4]}>
                        Also for our records we ask you{'\n'}review and agree to
                        the following terms:
                    </LatoText>
                    <LatoText
                        style={[
                            title,
                            text,
                            marginTop6,
                            {
                                textDecorationLine: 'underline',
                            },
                        ]}
                    >
                        Authorization Representative
                    </LatoText>
                    <LatoText style={[title, text]}>
                        I,
                        <LatoText fontWeight={'lato-bold'}>
                            {' '}
                            {name ? name : 'Name'}{' '}
                            {lastName ? lastName : 'Surname'}{' '}
                        </LatoText>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Tristique nulla aliquet enim tortor at
                        auctor urna nunc. Hac habitasse platea dictumst quisque.
                        Aliquet risus feugiat in ante metus. Duis at tellus at
                        urna condimentum mattis pellentesque. Sit amet volutpat
                        consequat mauris nunc congue nisi vitae suscipit.
                        Vestibulum morbi blandit cursus risus. Bibendum est
                        ultricies integer quis auctor elit sed vulputate.
                        Aliquam faucibus purus in massa. Aliquet nec ullamcorper
                        sit amet risus nullam eget felis. Vitae semper quis
                        lectus nulla at volutpat. Varius morbi enim nunc
                        faucibus a pellentesque sit amet. Pharetra vel turpis
                        nunc eget lorem dolor sed viverra. Tellus integer
                        feugiat scelerisque varius morbi enim nunc faucibus a.
                        Sed odio morbi quis commodo odio aenean sed adipiscing.
                        In hendrerit gravida rutrum quisque non tellus. Tortor
                        posuere ac ut consequat semper viverra nam libero justo.
                        Sociis natoque penatibus et magnis. Ac turpis egestas
                        sed tempus urna. Massa tincidunt dui ut ornare lectus
                        sit amet. Et sollicitudin ac orci phasellus egestas
                        tellus rutrum tellus pellentesque. Diam phasellus
                        vestibulum lorem sed risus ultricies tristique. Arcu
                        bibendum at varius vel pharetra vel. Amet massa vitae
                        tortor condimentum lacinia quis vel eros donec. Sagittis
                        orci a scelerisque purus semper eget duis at tellus.
                        Laoreet sit amet cursus sit amet dictum sit amet. Purus
                        semper eget duis at tellus at. Sed cras ornare arcu dui
                        vivamus arcu felis. Sem fringilla ut morbi tincidunt
                        augue. Diam quis enim lobortis scelerisque fermentum dui
                        faucibus. Tincidunt augue interdum velit euismod in
                        pellentesque massa. Nunc consequat interdum varius sit.
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
                            navigation.navigate(routes.signUpStepTwo)
                        }
                    >
                        <LatoText style={buttonText}>I Agree</LatoText>
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
