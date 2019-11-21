import React, { Fragment } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment'

import { connect } from 'react-redux'

import Layout from '../../constants/Layout'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'
import Styles from '../../constants/Styles'

import { LatoText } from '../../components/StyledText'
import { HeaderTitle, HeaderLeft, HeaderRight } from '../../components/Header'
import CategoryRow from '../../components/CategoryRow'
import FooterMessage from '../../components/FooterMessage'
import NavWrapper from '../../components/NavWrapper'
import FileRow from '../../components/FileRow'
import Input from '../../components/Input'
import Date from '../../components/Date'
import { AvoidingView } from '../../components/AvoidingView'

import { routes } from '../../utils/routes'

function ParentShareFileScreen(props) {
    const { mediumIcon, smallIcon, fileIcon, fileShareIcon } = Sizes
    const { greyIcon } = Colors
    const { row, flexEnd, center } = Styles

    const { dateText, fileTitle, input } = styles

    const { navigation, currentRecord } = props
    const record = currentRecord[0]

    return (
        <Fragment>
            <NavWrapper>
                <FileRow
                    onPress={() => navigation.goBack()}
                    title={'Share by Email'}
                    email
                />
            </NavWrapper>
            <Layout style={styles.contentContainer}>
                <View style={[row, flexEnd, { marginRight: wp(-3) }]}>
                    <Entypo
                        name="back-in-time"
                        size={wp(smallIcon)}
                        color={greyIcon}
                        onPress={() =>
                            navigation.navigate(routes.parentShareHistory)
                        }
                    />
                </View>
                <View style={[center]}>
                    <MaterialCommunityIcons
                        name="file-pdf"
                        size={wp(fileShareIcon)}
                        color={greyIcon}
                    />
                    <LatoText style={fileTitle}>
                        {currentRecord.length > 0
                            ? record.file.name
                            : 'Name unavailable'}
                    </LatoText>
                    <CategoryRow
                        category={
                            currentRecord.length > 0 ? record.category : []
                        }
                    />
                </View>
                <Input
                    style={input}
                    multiline={true}
                    placeholder="Write a comment"
                />
                <Date
                    date={
                        currentRecord.length > 0
                            ? moment(record.date).format('LLL')
                            : 'Date unavailable'
                    }
                />
            </Layout>
            <FooterMessage placeholder="Email to share" />
        </Fragment>
    )
}

ParentShareFileScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: (
        <HeaderTitle
            name={'Elizabeth Doe'}
            title={'MEDICAL RECORDS'}
            {...props}
        />
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

const { gradientStart, gradientMiddle, primaryColor, greyText } = Colors
const { M_Text, sideWrap, headerHeight, SM_Text, fileTitle } = Sizes

const styles = StyleSheet.create({
    dateText: {
        fontSize: wp(SM_Text),
        color: greyText,
        textAlign: 'center',
        marginTop: wp(5),
    },
    fileTitle: {
        fontSize: wp(fileTitle),
        color: greyText,
    },
    contentContainer: {
        paddingTop: wp(3),
        paddingBottom: wp(5),
    },
    filterText: {
        fontSize: wp(M_Text),
        color: primaryColor,
        textAlign: 'left',
    },
    input: {
        height: wp(50),
        marginTop: wp(5),
        paddingTop: wp(3),
        paddingBottom: wp(3),
    },
})

const mapStateToProps = state => {
    return {
        currentRecord: state.currentRecord,
    }
}

export default connect(mapStateToProps, null)(ParentShareFileScreen)
