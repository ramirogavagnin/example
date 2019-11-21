import React, { Fragment, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { connect } from 'react-redux'

import Layout from '../../constants/Layout'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

import { LatoText } from '../../components/StyledText'
import { HeaderTitle, HeaderLeft, HeaderRight } from '../../components/Header'
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'
import AvatarRow from '../../components/AvatarRow'
import NavWrapper from '../../components/NavWrapper'
import PartialDivider from '../../components/PartialDivider'
import OrderModal from '../../components/OrderModal'
import FilterModal from '../../components/FilterModal'
import RecordsList from '../../components/RecordsList'

import { routes } from '../../utils/routes'

const { gradientStart, gradientMiddle, primaryColor } = Colors
const { M_Text, sideWrap, headerHeight } = Sizes

function ChildrenRecordsScreen(props) {
    const [modalVisibility, setModalVisibility] = useState({
        order: false,
        filter: false,
    })

    const { order, filter } = modalVisibility

    const { mediumIcon } = Sizes

    const { contentContainer } = styles

    const { navigation, currentChildren } = props

    return (
        <Fragment>
            <NavWrapper>
                <AvatarRow
                    name={
                        currentChildren.length > 0
                            ? `${currentChildren[0].firstName} ${currentChildren[0].lastName}`
                            : 'Name unavailable'
                    }
                    onPress={() => {
                        navigation.navigate(routes.childrenHome)
                    }}
                    goBack
                />
                <PartialDivider />
                <Filter
                    handleOrderModal={() =>
                        setModalVisibility({
                            ...modalVisibility,
                            order: !order,
                        })
                    }
                    handleFilterModal={() =>
                        setModalVisibility({
                            ...modalVisibility,
                            filter: !filter,
                        })
                    }
                    {...props}
                />
            </NavWrapper>
            <Layout style={contentContainer}>
                <RecordsList
                    {...props}
                    data={
                        currentChildren.length > 0
                            ? currentChildren[0].medicalRecords
                            : []
                    }
                    onPress={() => {
                        navigation.navigate(routes.childrenRecordsDetail)
                    }}
                />
                <OrderModal
                    title="ORDER MEDICAL RESULTS"
                    icon="filter-variant"
                    onPress={() => {
                        setModalVisibility({
                            ...modalVisibility,
                            order: !order,
                        })
                    }}
                    visible={order}
                />
                <FilterModal
                    title="FILTER MEDICAL RESULTS"
                    icon="filter-outline"
                    onPress={() => {
                        setModalVisibility({
                            ...modalVisibility,
                            filter: !filter,
                        })
                    }}
                    visible={filter}
                />
            </Layout>
            <Footer />
        </Fragment>
    )
}

ChildrenRecordsScreen.navigationOptions = props => ({
    headerBackground: (
        <LinearGradient
            colors={[gradientStart, gradientMiddle, primaryColor]}
            style={{ flex: 1 }}
        />
    ),
    headerLeft: <HeaderLeft {...props} />,
    headerTitle: (
        <HeaderTitle {...props} name={'Elizabeth Doe'} title={'MOTHER'} />
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

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 0,
    },

    filterText: {
        fontSize: wp(M_Text),
        color: primaryColor,
        textAlign: 'left',
    },
    row: {
        flexDirection: 'row',
    },
})

const mapStateToProps = state => {
    return {
        currentChildren: state.currentChildren,
        currentRole: state.currentRole,
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps, null)(ChildrenRecordsScreen)
