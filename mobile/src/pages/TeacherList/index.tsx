import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton , RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import api from '../../services/api'


function TeacherList() {
    const [isfiltersVisible, setIsfiltersVisible] = useState(true)
    const[teachers,setTeachers] = useState([])
    const[subject,setSubject] = useState('')
    const[week_day,setWeek_day] = useState('')
    const[time,setTime] = useState('')


    function showFilters(){
        setIsfiltersVisible(!isfiltersVisible)
    }

    async function searchTeachers(){
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
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
                {(isfiltersVisible) && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Matérias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria"
                            value={subject}
                            onChangeText={(text)=>setSubject(text)}
                            placeholderTextColor='#c1bccc'
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
                                    value={week_day}
                                    onChangeText={(text)=>setWeek_day(text)}
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
                                    value={time}
                                    onChangeText={(text)=>setTime(text)}
                                    placeholderTextColor='#c1bccc'
                                >
                                </TextInput>
                            </View>
                        </View>

                        <RectButton
                            style={styles.submitButton}
                            onPress={searchTeachers}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            

            {!isfiltersVisible &&(
                <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                {teachers.map((teacher:Teacher)=>{
                    return <TeacherItem
                                key={teacher.id}
                                teacher={teacher}
                            ></TeacherItem>
                })}
            </ScrollView>
            )}
        </View>
    )
}

export default TeacherList