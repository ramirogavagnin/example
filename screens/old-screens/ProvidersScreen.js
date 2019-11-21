import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { routes } from '../../utils/routes'

import { HeaderLeft, HeaderRight, HeaderTitle } from '../../components/Header'
import { LatoText } from '../../components/StyledText'
import { Button } from '../../components/Button'
import Colors from '../../constants/Colors'
import Card from '../../components/Card'
import Divider from '../../components/Divider'
import Avatar from '../../components/Avatar'
import Terms from '../../components/Terms'

import AvatarImg from '../assets/images/no-image.png'

const items = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
]

export default function ProvidersScreen(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <LatoText style={styles.title} fontWeight={'lato-bold'}>
                    Medical Providers
                </LatoText>

                <Divider style={styles.headDivider} />

                {items.map((item, index) => (
                    <View
                        style={[
                            styles.row,
                            styles.spaceBetween,
                            styles.marginTopFour,
                        ]}
                        key={item.id}
                    >
                        <View>
                            <Avatar
                                style={styles.avatarCard}
                                source={AvatarImg}
                            />
                            <LatoText
                                style={[styles.doctorName, styles.marginTopTwo]}
                                fontWeight={'lato-bold'}
                            >
                                Dr. Name surname
                            </LatoText>
                            <LatoText
                                style={[styles.doctorInfo, styles.marginTopOne]}
                            >
                                Medical Speciality
                            </LatoText>
                            <LatoText
                                style={[styles.doctorInfo, styles.marginTopOne]}
                            >
                                Share records
                            </LatoText>
                        </View>
                        <View>
                            <Avatar
                                style={styles.avatarCard}
                                source={AvatarImg}
                            />
                            <LatoText
                                style={[styles.doctorName, styles.marginTopTwo]}
                                fontWeight={'lato-bold'}
                            >
                                Dr. Name surname
                            </LatoText>
                            <LatoText
                                style={[styles.doctorInfo, styles.marginTopOne]}
                            >
                                Medical Speciality
                            </LatoText>
                            <LatoText
                                style={[styles.doctorInfo, styles.marginTopOne]}
                            >
                                Share records
                            </LatoText>
                        </View>
                    </View>
                ))}
                <Button
                    style={[styles.button, styles.marginTopFour]}
                    onPress={() => navigation.navigate(routes.newProvider)}
                >
                    <LatoText
                        style={styles.buttonText}
                        fontWeight={'lato-bold'}
                    >
                        ADD NEW MEDICAL PROVIDER
                    </LatoText>
                </Button>
                <Divider style={styles.divider} />

                <Terms style={styles.terms} />
            </ScrollView>
        </View>
    )
}

ProvidersScreen.navigationOptions = props => ({
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: <HeaderTitle {...props} />,
    headerRight: <HeaderRight {...props} />,
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLeftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: hp(2),
    },
    headerRightContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: hp(2),
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
    doctorName: {
        fontSize: hp(2),
        color: Colors.primaryColor,
        textAlign: 'center',
    },
    doctorInfo: {
        fontSize: hp(1.8),
        color: Colors.primaryColor,
        textAlign: 'center',
    },
    avatarCard: {
        height: wp(38),
        width: wp(38),
        borderRadius: wp(1.5),
    },
    button: {
        backgroundColor: Colors.primaryColor,
        padding: hp(3),
        justifyContent: 'center',
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
