import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput,
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Styles from '../constants/Styles'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import ModalHeader from './ModalHeader'
import CustomCheckBox from './CustomCheckBox'
import { LatoText } from './StyledText'
import { valueToNode } from '@babel/types'

export default function FilterModal(props) {
    const [checked, setChecked] = useState({
        favorite: false,
        procedure1: false,
        procedure2: false,
        procedure3: false,
        speciality1: false,
        speciality2: false,
        speciality3: false,
    })

    const {
        modal,
        checkText,
        checkSeparator,
        row,
        align,
        spaceBetween,
        marginRight4,
        marginTop6,
    } = Styles

    const {
        favorite,
        procedure1,
        procedure2,
        procedure3,
        speciality1,
        speciality2,
        speciality3,
    } = checked

    return (
        <Modal animationType="slide" transparent={false} {...props}>
            <View style={modal}>
                <ModalHeader {...props} />
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({ ...checked, favorite: !favorite })
                        }
                    >
                        <CustomCheckBox
                            checked={favorite}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    favourite: !favourite,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Show only Favorites
                        </LatoText>
                    </TouchableOpacity>
                    <LatoText style={checkSeparator} fontWeight="lato-bold">
                        PROCEDURES
                    </LatoText>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({ ...checked, procedure1: !procedure1 })
                        }
                    >
                        <CustomCheckBox
                            checked={procedure1}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    procedure1: !procedure1,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Procedure 1
                        </LatoText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({ ...checked, procedure2: !procedure2 })
                        }
                    >
                        <CustomCheckBox
                            checked={procedure2}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    procedure2: !procedure2,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Procedure 2
                        </LatoText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({ ...checked, procedure2: !procedure2 })
                        }
                    >
                        <CustomCheckBox
                            checked={procedure3}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    procedure3: !procedure3,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Procedure 3
                        </LatoText>
                    </TouchableOpacity>
                    <LatoText style={checkSeparator} fontWeight="lato-bold">
                        SPECIALITIES
                    </LatoText>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({
                                ...checked,
                                speciality1: !speciality1,
                            })
                        }
                    >
                        <CustomCheckBox
                            checked={speciality1}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    speciality1: !speciality1,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Speciality 1
                        </LatoText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({
                                ...checked,
                                speciality2: !speciality2,
                            })
                        }
                    >
                        <CustomCheckBox
                            checked={speciality2}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    speciality2: !speciality2,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Speciality 2
                        </LatoText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[row, align, marginTop6]}
                        activeOpacity={0.8}
                        onPress={() =>
                            setChecked({
                                ...checked,
                                speciality3: !speciality3,
                            })
                        }
                    >
                        <CustomCheckBox
                            checked={speciality3}
                            style={marginRight4}
                            onPress={() =>
                                setChecked({
                                    ...checked,
                                    speciality3: !speciality3,
                                })
                            }
                        />
                        <LatoText style={checkText} fontWeight="lato-bold">
                            Speciality 3
                        </LatoText>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>
    )
}
