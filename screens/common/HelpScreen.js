import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { HeaderLeft, HeaderRight, HeaderTitle } from '../../components/Header'
import { LatoText } from '../../components/StyledText'
import Colors from '../../constants/Colors'
import Card from '../../components/Card'
import Divider from '../../components/Divider'
import Avatar from '../../components/Avatar'
import Terms from '../../components/Terms'
import AvatarImg from '../../assets/images/video-icon.png'

const items = [
    {
        id: 1,
    },
    {
        id: 3,
    },
    {
        id: 5,
    },
]

export default function HelpScreen(props) {
    const { navigate } = props.navigation
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={styles.titleContainer}>
                    <LatoText style={styles.title} fontWeight={'lato-bold'}>
                        Help Videos
                    </LatoText>
                    <LatoText style={[styles.infoText, styles.marginTopOneHp]}>
                        A description of the help videos section
                    </LatoText>
                    <LatoText
                        style={[styles.title, styles.marginTopTwo]}
                        fontWeight={'lato-bold'}
                    >
                        {'<'}search bar {'/>'}
                    </LatoText>
                </View>
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
                                style={[styles.videoName, styles.marginTopTwo]}
                                fontWeight={'lato-bold'}
                            >
                                Video {item.id}
                            </LatoText>
                            <LatoText
                                style={[styles.videoInfo, styles.marginTopOne]}
                            >
                                Some Text
                            </LatoText>
                        </View>
                        <View>
                            <Avatar
                                style={styles.avatarCard}
                                source={AvatarImg}
                            />
                            <LatoText
                                style={[styles.videoName, styles.marginTopTwo]}
                                fontWeight={'lato-bold'}
                            >
                                Video {item.id + 1}
                            </LatoText>
                            <LatoText
                                style={[styles.videoInfo, styles.marginTopOne]}
                            >
                                Some Text
                            </LatoText>
                        </View>
                    </View>
                ))}
                <Divider style={styles.divider} />
                <Terms style={styles.terms} />
            </ScrollView>
        </View>
    )
}

HelpScreen.navigationOptions = props => ({
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

    titleContainer: {
        alignItems: 'center',
    },

    title: {
        fontSize: hp(2.8),
        color: Colors.primaryColor,
        textAlign: 'center',
    },
    infoText: {
        fontSize: hp(2.2),
        color: Colors.primaryColor,
        textAlign: 'center',
        paddingTop: hp(1),
    },
    videoName: {
        fontSize: hp(2),
        color: Colors.primaryColor,
        textAlign: 'center',
    },
    videoInfo: {
        fontSize: hp(1.8),
        color: Colors.primaryColor,
        textAlign: 'center',
    },
    avatarCard: {
        height: wp(30),
        width: wp(40),
        borderRadius: wp(1.5),
    },
    terms: {
        paddingBottom: hp(6),
    },
    divider: {
        marginVertical: hp(5),
    },
    /// Justify Content
    row: {
        flexDirection: 'row',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }, ///

    /// Margins
    marginTopOne: {
        marginTop: wp(1),
    },
    marginTopOneHp: {
        marginTop: hp(1),
    },
    marginTopTwo: {
        marginTop: hp(2),
    },
    marginTopFour: {
        marginTop: hp(4),
    }, ///
})
