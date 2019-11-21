import { StyleSheet, Platform } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Sizes from './Sizes'
import Colors from './Colors'

const {
    blackText,
    backgroundWhiteColor,
    primaryColor,
    whiteText,
    greyText,
    lightGreyText,
    greyIcon,
} = Colors
const {
    name,
    medicalButtonText,
    avatar,
    titleHeader,
    SM_Text,
    M_Text,
    loginButtonText,
    listText,
    menuText,
    cardMargin,
    dateMargin,
    inputRadius,
} = Sizes

export default StyleSheet.create({
    logo: {
        width: wp(50),
        height: wp(25),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    name: {
        fontSize: wp(name),
        color: blackText,
        textAlign: 'center',
    },
    avatar: {
        backgroundColor: backgroundWhiteColor,
        height: wp(avatar),
        width: wp(avatar),
        borderRadius: wp(avatar / 2),
    },
    avatarRow: {
        backgroundColor: backgroundWhiteColor,
        height: wp(12),
        width: wp(12),
        borderRadius: wp(6),
    },
    rowTitle: {
        color: blackText,
        fontSize: wp(titleHeader),
        paddingTop: wp(1.5),
        paddingLeft: wp(2),
    },
    button: {
        backgroundColor: primaryColor,
        height: wp(20),
        padding: wp(5),
        justifyContent: 'center',
    },
    buttonText: {
        color: whiteText,
        fontSize: wp(medicalButtonText),
        textAlign: 'center',
    },
    whiteButton: {
        width: '100%',
        height: wp(14),
        backgroundColor: backgroundWhiteColor,
        padding: wp(5),
        justifyContent: 'center',
    },
    whiteButtonText: {
        color: primaryColor,
        fontSize: wp(medicalButtonText),
        textAlign: 'center',
    },
    question: {
        fontSize: wp(M_Text),

        textAlign: 'left',
        color: blackText,
    },
    answer: {
        fontSize: wp(M_Text - 0.2),
        textAlign: 'left',
        color: greyText,
    },
    titleSeparator: {
        fontSize: wp(listText),
        textAlign: 'left',
        color: greyText,
        marginTop: wp(8),
        marginBottom: wp(2),
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
        fontSize: wp(loginButtonText - 0.8),
        fontFamily: 'lato-bold',
        textAlign: 'center',
    },
    dateText: {
        fontSize: wp(SM_Text),
        color: greyText,
        textAlign: 'center',
        marginTop: wp(dateMargin),
    },
    criticalTitle: {
        color: blackText,
        fontSize: wp(name),
    },
    card: {
        backgroundColor: backgroundWhiteColor,
        borderRadius: wp(inputRadius),
        marginTop: wp(cardMargin),
    },
    checkBox: {
        height: wp(5),
        width: wp(5),
        borderRadius: wp(2.5),
        borderColor: greyIcon,
    },
    modal: {
        paddingVertical: Platform.OS === 'ios' ? wp(7) : wp(5),
        paddingHorizontal: wp(5),
        justifyContent: 'center',
    },
    checkText: {
        fontSize: wp(M_Text),
        color: blackText,
        textAlign: 'left',
    },
    checkSeparator: {
        marginTop: wp(6),
        paddingLeft: wp(3),
        fontSize: wp(menuText),
        color: lightGreyText,
        textAlign: 'left',
    },
    selectAndroid: {
        marginTop: Platform.OS === 'android' ? wp(3) : wp(1),
        height: wp(10),
        width: wp(90),
    },
    selectIOS: {
        height: wp(30),
    },
    /// Justify Content
    spaceBetween: {
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
    },
    justify: {
        justifyContent: 'center',
    },
    flexStart: {
        justifyContent: 'flex-start',
    },
    flexEnd: {
        justifyContent: 'flex-end',
    },
    align: {
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrap: {
        flexWrap: 'wrap',
    },
    width: {
        width: '100%',
    },
    /// Margins
    marginTop3: {
        marginTop: wp(3),
    },
    marginTop4: {
        marginTop: wp(4),
    },
    marginTop6: {
        marginTop: wp(6),
    },
    marginTop8: {
        marginTop: wp(8),
    },
    marginTop10: {
        marginTop: wp(10),
    },
    marginTop12: {
        marginTop: wp(12),
    },
    marginTop14: {
        marginTop: wp(14),
    },
    marginBottom3: {
        marginBottom: wp(3),
    },
    marginBottom6: {
        marginBottom: wp(6),
    },
    marginBottom8: {
        marginBottom: wp(8),
    },
    marginRight3: {
        marginRight: wp(3),
    },
    marginRight4: {
        marginRight: wp(4),
    },
    marginRight6: {
        marginRight: wp(6),
    },
    // Vertical
    marginVertical2: {
        marginVertical: wp(2),
    },
    marginVertical3: {
        marginVertical: wp(3),
    },
    marginVertical6: {
        marginVertical: wp(6),
    },
    marginVertical10: {
        marginVertical: wp(10),
    },
    //Paddingg
    paddingLeft4: {
        paddingLeft: wp(4),
    },
    paddingRight2: {
        paddingRight: wp(2),
    },
    paddingRight4: {
        paddingRight: wp(4),
    },
    paddingTop5: {
        paddingRight: wp(5),
    },
})
