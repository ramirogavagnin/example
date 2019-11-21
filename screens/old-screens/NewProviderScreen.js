import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Platform } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { ListItem, Left, Right, Radio } from 'native-base'

import { routes } from '../../utils/routes'

import Colors from '../../constants/Colors'

import { HeaderLeft, HeaderRight, HeaderTitle } from '../../components/Header'
import { LatoText } from '../../components/StyledText'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import Divider from '../../components/Divider'
import Avatar from '../../components/Avatar'
import Terms from '../../components/Terms'
import Input from '../../components/Input'
import { AvoidingView } from '../../components/AvoidingView'

import AvatarImg from '../../assets/images/no-image.png'

export default function NewProviderScreen(props) {
    const [form, setFormValue] = useState({
        name: '',
        surname: '',
        speciality: '',
        medicalCenter: '',
    })
    const [check, setCheck] = useState(false)
    const [checkTwo, setCheckTwo] = useState(false)
    const { navigation } = props
    const { name, surname, speciality, medicalCenter } = form
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <LatoText style={styles.title} fontWeight={'lato-bold'}>
                    New Medical Provider
                </LatoText>

                <Divider style={styles.headDivider} />
                <LatoText
                    style={[
                        styles.title,
                        styles.textCenter,
                        styles.marginTopTwo,
                    ]}
                    fontWeight={'lato-bold'}
                >
                    {'<'}search bar {'/>'}
                </LatoText>

                <LatoText
                    style={[styles.title, styles.marginTopFour]}
                    fontWeight={'lato-bold'}
                >
                    Registration Form
                </LatoText>
                <Input
                    value={name}
                    style={[styles.input, styles.marginTopFour]}
                    placeholder="Name"
                    onChangeText={text => setFormValue({ ...form, name: text })}
                />
                <Input
                    value={surname}
                    style={styles.input}
                    placeholder="Surname"
                    onChangeText={text =>
                        setFormValue({ ...form, surname: text })
                    }
                />
                <Input
                    value={speciality}
                    style={styles.input}
                    placeholder="Speciality"
                    onChangeText={text =>
                        setFormValue({ ...form, speciality: text })
                    }
                />
                <Input
                    value={medicalCenter}
                    style={styles.input}
                    placeholder="Medical Center"
                    onChangeText={text =>
                        setFormValue({ ...form, medicalCenter: text })
                    }
                />
                <ListItem style={[styles.listItem, styles.marginTopTwo]}>
                    <Left style={styles.left}>
                        <LatoText onPress={() => setCheck(!check)}>
                            Check
                        </LatoText>
                        <Radio
                            color={'#f0ad4e'}
                            selectedColor={'#5cb85c'}
                            selected={check}
                            onPress={() => setCheck(!check)}
                        />
                    </Left>
                    <Right style={styles.right}>
                        <LatoText onPress={() => setCheckTwo(!checkTwo)}>
                            Check Two
                        </LatoText>
                        <Radio
                            color={'#f0ad4e'}
                            selectedColor={'#5cb85c'}
                            selected={checkTwo}
                            onPress={() => setCheckTwo(!checkTwo)}
                        />
                    </Right>
                </ListItem>

                <Button
                    style={[styles.button, styles.marginTopFour]}
                    onPress={() => navigation.navigate(routes.providers)}
                >
                    <LatoText
                        style={styles.buttonText}
                        fontWeight={'lato-bold'}
                    >
                        SUBMIT
                    </LatoText>
                </Button>
                <Divider style={styles.divider} />

                <Terms style={styles.terms} />
            </ScrollView>
        </View>
    )
}

NewProviderScreen.navigationOptions = props => ({
    headerTitle: <HeaderTitle {...props} />,
    headerRight: Platform.OS === 'android' && <View />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerStyle: {
        height: hp(12),
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: hp(3),
        paddingHorizontal: wp(8),
    },
    title: {
        fontSize: hp(2.8),
        color: Colors.primaryColor,
        textAlign: 'left',
    },
    headDivider: {
        marginVertical: hp(3),
    },
    divider: {
        marginVertical: hp(5),
    },
    formContainer: {
        paddingHorizontal: hp(5),
    },
    input: {
        marginTop: hp(2),
    },
    listItem: {
        borderBottomColor: 'transparent',
        marginTop: hp(1),
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingRight: 0,
        paddingLeft: 0,
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.primaryColor,
        padding: hp(3),
        justifyContent: 'center',
        width: wp(40),
    },
    buttonText: {
        color: Colors.whiteText,
        fontSize: hp(2.2),
        textAlign: 'center',
    },
    terms: {
        paddingBottom: hp(6),
    },
    /// Justify Content
    row: {
        flexDirection: 'row',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    textCenter: {
        textAlign: 'center',
    }, ///

    /// Margins
    marginTopOne: {
        marginTop: wp(1),
    },
    marginTopTwo: {
        marginTop: hp(2),
    },
    marginTopFour: {
        marginTop: hp(4),
    }, ///
})
