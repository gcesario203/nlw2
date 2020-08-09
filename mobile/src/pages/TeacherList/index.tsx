import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton , RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'


function TeacherList() {
    const [isfiltersVisible, setIsfiltersVisible] = useState(false)

    function showFilters(){
        setIsfiltersVisible(!isfiltersVisible)
    }
 
    return (
        <View style={styles.containter}>
            <PageHeader
                title="Proffys Disponíveis"
                headerRight={
                    <BorderlessButton onPress={showFilters}>
                        <Feather
                            name="filter"
                            size={20}
                            color='#fff'
                        >
                        </Feather>
                    </BorderlessButton>
                    }
                >
                {isfiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Matérias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria"
                        >
                        </TextInput>
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Dia da Semana
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor='#c1bccc'
                                >
                                </TextInput>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Horário
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor='#c1bccc'
                                >
                                </TextInput>
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </ScrollView>
        </View>
    )
}

export default TeacherList